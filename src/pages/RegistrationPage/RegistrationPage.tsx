import { Box, Form, Input } from '@vinderman/ui-components'
import { ReactElement } from 'react'
import classes from './RegistrationPage.module.scss'

const RegistrationPage = (): ReactElement => {
  return (
    <div className={classes.registrationPage}>
      <Box height="max-content">
        <Form>
          <Form.Group required>
            <Form.Label>Введите логин</Form.Label>
            <Input placeholder="Логин" />
          </Form.Group>
        </Form>
      </Box>
    </div>
  )
}

export default RegistrationPage
