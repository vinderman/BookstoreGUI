import { ReactElement } from 'react'
import styles from './AppHeader.module.scss'
import { Logo } from '@vinderman/ui-components'

const AppHeader = (): ReactElement => {
  return (
    <header className={styles.wrapper}>
      <Logo prefix="Bookstore" />
    </header>
  )
}

export default AppHeader
