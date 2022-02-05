import styles from '../styles/Toolbar.module.css'
import { useRouter } from 'next/router'

const Toolbar = () => {
  const router = useRouter()
  //console.log('Hi')
  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>BGNews</div>
      <div onClick={() => router.push('/eom')}>EOM</div>
      <div
        onClick={() =>
          (window.location.href = 'https://weather.com/bg-BG/weather/today')
        }
      >
        Weather
      </div>
    </div>
  )
}

export default Toolbar
