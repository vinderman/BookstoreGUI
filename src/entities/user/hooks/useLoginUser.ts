import { useMutation, UseMutationResult } from '@tanstack/react-query'
import {
  AuthByLoginDto,
  AuthByLoginResponseDtoSuccessResponse,
  ErrorResponse
} from '../../../shared/api/Api'
import { apiClient } from '../../../shared/helpers/apiClient'
import { AxiosError } from 'axios'
import { setAuthData } from '@/entities/auth/auth.domain'

export default function useLoginUser(): UseMutationResult<
  AuthByLoginResponseDtoSuccessResponse,
  AxiosError<ErrorResponse>,
  AuthByLoginDto
> {
  return useMutation({
    mutationFn: async (requestData: AuthByLoginDto) => {
      const response = await apiClient.authLoginCreate(requestData)

      return response.data
    },
    onSuccess: (data) => {
      if (data.data) {
        setAuthData(data.data)
      }
    }
  })
}
