import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <NavLink to="/dishes" activeClassName={styles.active}>Dishes</NavLink>
      <NavLink to="/sports" activeClassName={styles.active}>Sports</NavLink>
    </div>
  )
}