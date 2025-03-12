import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import BaseLayout from './shared/ui/layout/BaseLayout'
import UnloggedLayout from './shared/ui/layout/UnloggedLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [{ path: '**', element: <div>404</div> }]
  },
  {
    element: <UnloggedLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />
      },
      { path: '/registration', element: <RegistrationPage /> }
    ]
  }
])

export { router }
