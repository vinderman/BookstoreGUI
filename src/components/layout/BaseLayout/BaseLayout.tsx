import { ReactElement } from 'react'
import styles from './BaseLayout.module.scss'
import AppHeader from '../AppHeader'
import { Outlet } from 'react-router-dom'

const BaseLayout = (): ReactElement => {
  return (
    <main className={styles.wrapper}>
      <AppHeader />
      <div className={styles.body}>
        <Outlet />
      </div>
    </main>
  )
}

export default BaseLayout
