import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import UnloggedLayout from './components/layout/UnloggedLayout'

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
