import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { apiClient } from '../../../shared/helpers/apiClient'
import { RegisterDto } from '../../../shared/api/Api'

export default function useRegisterUser(): UseMutationResult<
  boolean,
  unknown,
  RegisterDto
> {
  return useMutation({
    mutationFn: async (variables: RegisterDto) => {
      const response = await apiClient.authRegisterCreate(variables)

      return response.data.data
    }
  })
}
