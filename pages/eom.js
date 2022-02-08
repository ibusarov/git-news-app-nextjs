import styles from '../styles/EOM.module.css'
import Image from 'next/image'
import Toolbar from '../components/toolbar'
import Footer from '../components/footer'

const EOM = ({ employee }) => {
  //console.log(employee)
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Picture of The Month</h1>
        <div className={styles.employeeOfTheMonth}>
          {/* <h3>Our Posts Hunters</h3>
          <h5>Camel engineers</h5> */}
          <Image
            src='/camelchildren.jpg'
            alt='Employee of the month'
            width={500}
            height={350}
          />
          <h4>Produced by our animal posts experts</h4>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
  )
  const employee = await apiResponse.json()

  return {
    props: {
      employee,
    },
  }
}
export default EOM
