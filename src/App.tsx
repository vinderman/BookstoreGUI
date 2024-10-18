import { ReactElement } from 'react'
import '@vinderman/ui-components/dist/style.css'
import './styles/global.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

const App = (): ReactElement => {
  return <RouterProvider router={router} />
}

export default App
