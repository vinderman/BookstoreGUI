import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { QueryKeys } from '../../../shared/constants/reactQuery'
import { apiClient } from '../../../shared/helpers/apiClient'
import { RoleDto } from '../../../shared/api/Api'

export default function useGetUserRoles(): UseQueryResult<RoleDto[]> {
  return useQuery({
    queryKey: [QueryKeys.getUserRoles],
    queryFn: async () => (await apiClient.rolesList()).data
  })
}
