import { server } from '../config'
import Head from 'next/head'

import ArticleList from '../components/ArticleList'


export default function Home({data}) {
  console.log(data);
  return (
    <div >
      <Head>
        <title>WebDew News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <h1>Welcome to Next</h1>
      <ArticleList data={data}/>
     
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}


// export const getStaticProps = async ()=> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       data
//     }, // will be passed to the page component as props
//   }
// }
