import { Api, HttpClient } from '../services/api/Api'

const httpClient = new HttpClient({
  baseURL: 'http://localhost:5000'
})

export const apiClient = new Api(httpClient).api
