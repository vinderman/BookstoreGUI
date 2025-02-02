import { Button, Form, Input, Space } from '@vinderman/ui-components'
import { ReactElement, useState } from 'react'
import useLoginUser from './hooks/useLoginUser'

const LoginPage = (): ReactElement => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const { mutate: processLogin, error } = useLoginUser()

  const handleSubmit = (): void => {
    processLogin({
      login,
      password
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group required>
        <Form.Label>Введите логин или email</Form.Label>
        <Input value={login} onChange={setLogin} />
      </Form.Group>

      <Form.Group required>
        <Form.Label>Введите пароль</Form.Label>
        <Input type="password" value={password} onChange={setPassword} />
      </Form.Group>

      {error && (
        <Form.ErrorMessage>{error.response?.data.message}</Form.ErrorMessage>
      )}

      <Space direction="horizontal">
        <Button type="submit">Войти</Button>
      </Space>
    </Form>
  )
}

export default LoginPage
