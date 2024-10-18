import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />
  }
])

export { router }
