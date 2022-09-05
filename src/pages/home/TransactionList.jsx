// styles
import styles from './Home.module.css'

import { useTheme } from "../../hooks/useTheme"


export default function TransactionList({ transactions }) {

  const { mode } = useTheme()

  return (
    <ul className={`${styles.transactions} ${styles[`${mode}`]}`}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
        </li>
      ))}
    </ul>
  )
}
