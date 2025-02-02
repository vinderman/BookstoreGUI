import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { apiClient } from '../../../utils/helpers/apiClient'
import { RegisterDto } from '../../../utils/services/api/Api'

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
