import styles from '../styles/Toolbar.module.css'
import { useRouter } from 'next/router'

const Toolbar = () => {
  const router = useRouter()
  //console.log('Hi')
  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed')}>BGNEWS</div>
      {/* <div onClick={() => router.push('/animals')}>Animal</div> */}

      <div
        onClick={() =>
          (window.location.href =
            'https://www.wildcamels.com/great-gobi-kids-corner/')
        }
      >
        Camels
      </div>
      <div onClick={() => router.push('/eom')}>Awards</div>
    </div>
  )
}


export default Toolbar
