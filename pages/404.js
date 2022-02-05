// 404.js
import styles from '../styles/EOM.module.css'
import Image from 'next/image'
import Toolbar from '../components/toolbar'


export default function FourOhFour() {
  return  (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Sorry there is no available articles</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>We will come back soon</h3>
          {/* <h6>404</h6> */}
          <Image src="/camel.jpg" alt='404 or 500 Error' width={250} height={250} />
          <h1>Stay tuned....</h1>
        </div>
      </div>
    </div>
  )
}
