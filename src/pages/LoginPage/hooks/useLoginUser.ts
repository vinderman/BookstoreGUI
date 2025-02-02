import { useMutation, UseMutationResult } from '@tanstack/react-query'
import {
  AuthByLoginDto,
  AuthByLoginResponseDtoSuccessResponse,
  ErrorResponse
} from '../../../utils/services/api/Api'
import { apiClient } from '../../../utils/helpers/apiClient'
import { AxiosError } from 'axios'

export default function useLoginUser(): UseMutationResult<
  AuthByLoginResponseDtoSuccessResponse,
  AxiosError<ErrorResponse>,
  AuthByLoginDto
> {
  return useMutation({
    mutationFn: async (requestData: AuthByLoginDto) => {
      const response = await apiClient.authLoginCreate(requestData)

      return response.data
    }
  })
}
