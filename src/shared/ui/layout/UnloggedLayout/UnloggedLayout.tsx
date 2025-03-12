import { checkIsAuthenticated } from '@/entities/auth'
import { PageLayout } from '@vinderman/ui-components'
import { Navigate, Outlet } from 'react-router-dom'

const UnloggedLayout: React.FC = () => {
  const isAuthenticated = checkIsAuthenticated()

  if (isAuthenticated) {
    return <Navigate to="/" />
  }
  return (
    <>
      <PageLayout>
        <PageLayout.Body>
          <PageLayout.Content>
            <Outlet />
          </PageLayout.Content>
        </PageLayout.Body>
      </PageLayout>
    </>
  )
}

export default UnloggedLayout
