import { useAuthContext } from '../../hooks/useAuthContext'
// styles
import styles from "./Home.module.css"


import { useTheme } from "../../hooks/useTheme"


// components 
import TransactionForm from "./TransactionForm"

export default function Home() {

  const { user } = useAuthContext()

  const { mode } = useTheme()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
