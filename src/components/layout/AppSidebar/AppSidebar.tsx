import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AppSidebar.module.scss'

const AppSidebar = (): ReactElement => {
  return (
    <aside className={styles.wrapper}>
      <NavLink to="/tokens">Токены</NavLink>
      <NavLink to={'/button'}>button</NavLink>
    </aside>
  )
}

export default AppSidebar
