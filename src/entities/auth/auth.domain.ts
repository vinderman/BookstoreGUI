import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_EXPIRATION
} from 'Shared/constants/localStorage'

export const checkIsAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem(ACCESS_TOKEN_KEY))
}

export interface AuthData {
  accessToken: string
  refreshToken: string
  /** @format date-time */
  expiresAt: string
}

export const setAuthData = (data: AuthData): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken)
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken)
  localStorage.setItem(TOKEN_EXPIRATION, data.expiresAt)
}

export const getAuthData = (): AuthData | undefined => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
  const expiresAt = localStorage.getItem(TOKEN_EXPIRATION)

  if (accessToken && refreshToken && expiresAt) {
    return {
      accessToken,
      refreshToken,
      expiresAt
    }
  }
}
