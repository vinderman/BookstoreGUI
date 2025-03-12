import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { QueryKeys } from '@/shared/constants/reactQuery'
import { apiClient } from '@/shared/helpers/apiClient'

export default function useGetCurrentUser(): UseQueryResult {
  return useQuery({
    queryKey: [QueryKeys.getCurrentUser],
    queryFn: async () => {
      const response = await apiClient.usersCurrentuserList()

      return response.data
    }
  })
}
