import { Api, HttpClient } from '../api/Api'
import { getAuthData } from 'Entities/auth'
import { InternalAxiosRequestConfig, isAxiosError } from 'axios'
import { setAuthData } from '@/entities/auth/auth.domain'

const httpClient = new HttpClient({
  baseURL: 'http://localhost:5001'
})

function onRequest(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  const authData = getAuthData()
  if (authData) {
    config.headers.set({
      Authorization: `Bearer ${authData.accessToken}`
    })
  }

  return config
}

httpClient.instance.interceptors.request.use(onRequest)

httpClient.instance.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config
  if (isAxiosError(error) && error.status === 401) {
    const authData = getAuthData()

    if (authData && Date.now() > new Date(authData.expiresAt).getTime()) {
      const response = await apiClient.authRefreshtokenCreate({
        refreshToken: authData.refreshToken
      })

      const newAuthData = response.data.data

      if (newAuthData) {
        setAuthData(newAuthData)

        httpClient.instance.defaults.headers.common.Authorization = `Bearer ${newAuthData.accessToken}`
        return await httpClient.request(originalRequest)
      }
    }
  }
})

export const apiClient = new Api(httpClient).api
