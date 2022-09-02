import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {

  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }



  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney 🤑 </li>


        <button onClick={toggleMode} className='btn'>changeTheme</button>

        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>
    </nav>
  )
}
