import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['greek'] })

export default function Page() {
    return (
        <main className={styles.main}>

            <div className={styles.center}>
                <div className={styles.description}>
                    <p className="text-primary">Tes Fitur Route</p>
                </div>
            </div>

        </main>
    )
}