import styles from "./Home.module.css"
import { useTheme } from "../../hooks/useTheme"

export default function Home() {

  const { mode } = useTheme()
  return (
    <div className={`${styles[`home`]} ${styles[`${mode}`]}`}>
      Home
    </div>
  )
}
