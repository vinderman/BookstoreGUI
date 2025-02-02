import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { queryKeys } from '../utils/helpers/queryKeys'
import { apiClient } from '../utils/helpers/apiClient'
import { RoleDto } from '../utils/services/api/Api'

export default function useGetUserRoles(): UseQueryResult<RoleDto[]> {
  return useQuery({
    queryKey: [queryKeys.getUserRoles],
    queryFn: async () => (await apiClient.rolesList()).data
  })
}
