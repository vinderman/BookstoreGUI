import { PageLayout } from '@vinderman/ui-components'
import { Outlet } from 'react-router-dom'

const UnloggedLayout: React.FC = () => {
  return (
    <>
      <PageLayout>
        <PageLayout.Body>
          <Outlet />
        </PageLayout.Body>
      </PageLayout>
    </>
  )
}

export default UnloggedLayout
