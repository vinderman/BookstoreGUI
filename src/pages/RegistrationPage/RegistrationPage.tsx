import { Space } from '@vinderman/ui-components'
import { ReactElement } from 'react'
import RegistrationForm from './components/RegistrationForm'

const RegistrationPage = (): ReactElement => {
  return (
    <Space align="center" className="height-100" justify="center">
      <RegistrationForm />
    </Space>
  )
}

export default RegistrationPage
