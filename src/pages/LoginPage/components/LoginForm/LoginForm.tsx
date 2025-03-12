import { useLoginUser } from '@/entities/user'
import { Box, Button, Form, Input, Space } from '@vinderman/ui-components'
import { ReactElement, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = (): ReactElement => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const { mutate: processLogin, isPending, error } = useLoginUser()
  const navigate = useNavigate()

  const handleSubmit = (): void => {
    console.log('process')
    processLogin(
      {
        login,
        password
      },
      {
        onSuccess: (data) => {
          console.log('onSuccess', data)
          if (data.success) {
            navigate('/')
          }
        }
      }
    )
  }

  return (
    <Box
      borderRadius="small"
      borderWidth="default"
      padding="medium"
      borderColor="secondary"
    >
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
          <Button type="submit" loading={isPending}>
            Войти
          </Button>

          <Button as={Link} to="/registration" variant="ghost">
            Зарегистрироваться
          </Button>
        </Space>
      </Form>
    </Box>
  )
}

export default LoginForm
