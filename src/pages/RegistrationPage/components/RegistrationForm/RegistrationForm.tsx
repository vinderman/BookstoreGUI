import { Form, Input } from '@vinderman/ui-components'
import { ReactElement } from 'react'

const RegistrationForm = (): ReactElement => {
  return (
    <Form>
      <Form.Group required>
        <Form.Label>Логин</Form.Label>

        <Input />
      </Form.Group>
    </Form>
  )
}

export default RegistrationForm
