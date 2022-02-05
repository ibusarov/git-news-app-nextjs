import styles from '../../styles/Feed.module.css'
import { useRouter } from 'next/router'
import Toolbar from '../../components/toolbar'
// import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter()

  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        {articles?.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && <img src={article.urlToImage} alt='' />}
          </div>
        ))}
      </div>
      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scroll(0, 0))
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          Previous Page
        </div>
        <div>
          {'<< '}
          {pageNumber}
          {' >>'}
        </div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scroll(0, 0))
            }
          }}
          className={pageNumber === 5 ? styles.disabled : styles.active}
        >
          Next Page
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug
  console.log(pageNumber)

  if (!pageNumber || pageNumber < 0 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    }
  }

  // `https://newsapi.org/v2/top-headlines?country=bg&pageSize=5&page=${pageNumber}`,
  //`https://newsapi.org/v2/everything?q=animal&pageSize=5&page=${pageNumber}`,

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=bg&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  )
    .then((res) => {
      if (!res.ok) {
        return null
      }
      return res.json()
    })

    .catch((err) => console.error(err))

  if (apiResponse === null) {
    return {
      props: {},
      notFound: true,
    }
  }

  const { articles } = apiResponse

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  }
}

export default Feed
