import { Space } from '@vinderman/ui-components'
import { ReactElement } from 'react'
import LoginForm from './components/LoginForm'

const LoginPage = (): ReactElement => {
  return (
    <Space align="center" className="height-100" justify="center">
      <LoginForm />
    </Space>
  )
}

export default LoginPage
