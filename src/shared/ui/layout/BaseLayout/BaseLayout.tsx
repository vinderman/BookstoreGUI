import { ReactElement } from 'react'
import AppHeader from '../AppHeader'
import { Navigate, Outlet } from 'react-router-dom'
import { Loader, PageLayout } from '@vinderman/ui-components'
import { checkIsAuthenticated } from '@/entities/auth'
import { useGetCurrentUser, useGetUserRoles } from '@/entities/user'

const BaseLayout = (): ReactElement => {
  const isAuthenticated = checkIsAuthenticated()
  const { isFetching: isFetchingCurrentUser } = useGetCurrentUser()
  const { isFetching: isFetchingUserRoles } = useGetUserRoles()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  if (isFetchingCurrentUser || isFetchingUserRoles) {
    return (
      <Loader.Container fullHeight>
        <Loader />
      </Loader.Container>
    )
  }

  return (
    <PageLayout>
      <PageLayout.Header>
        <AppHeader />
      </PageLayout.Header>
      <PageLayout.Body>
        <PageLayout.Content>
          <Outlet />
        </PageLayout.Content>
      </PageLayout.Body>
    </PageLayout>
  )
}

export default BaseLayout
