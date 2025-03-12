import { ReactElement } from 'react'
import { Button, Logo, Space } from '@vinderman/ui-components'

import { Link } from 'react-router-dom'
import { checkIsAuthenticated } from '@/entities/auth'

const AppHeader = (): ReactElement => {
  const isAuthenticated = checkIsAuthenticated()
  return (
    <Space direction="horizontal" justify="space-between" align="center">
      <Logo prefix="Bookstore" />

      {isAuthenticated ? (
        <div>Профиль</div>
      ) : (
        <Space direction="horizontal">
          <Button variant="ghost" as={Link} to="/login">
            Войти
          </Button>
          <Button variant="ghost" as={Link} to="/registration">
            Зарегистрироваться
          </Button>
        </Space>
      )}
    </Space>
  )
}

export default AppHeader
