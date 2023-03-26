import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['greek'] })

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <div className={styles.description}>
          <p className="text-warning">Welcome To <code className={styles.code}>Lembar Studio</code> Cuii !</p>
        </div>
      </div>

    </main>
  )
}
