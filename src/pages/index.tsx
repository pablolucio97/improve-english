import Header from '../components/Header'
import BoxPost from '../components/BoxPost'
import Search from '../components/Search'
import { data } from '../utils/data'
import { Posts, PostProps } from '../types/Post'
import { Container } from './styles'
import { FaFlagUsa } from 'react-icons/fa'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'

import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'


export default function Home({ posts }: Posts) {




  const [search, setSearch] = useState('')

  return (
    <Container>
      <Header />
      <Search
        setTerm={e => setSearch(e.target.value)}
        term={search}
      />

      <main>
        <h1><FaFlagUsa color='#e6473c' style={{ margin: 8 }} />Last posts</h1>
        <div className="filterContainer">
          <strong>Filter your post by:</strong>
          {/*    <button onClick={() => sortPostsByReleaseDate(posts)} >Release date</button>
          <button onClick={() => sortPostsAlphabetically(posts)}>Alphabeticallly</button>
          <button onClick={() => sortPostsByRelevance(posts)}>Most relevants</button> */}
        </div>
        <div>
          {data.length === 0 ?

            <div className='noFoundPosts'>
              <span>Desculpe, não foi encontrado nenhum post para a pesquisa mencionada.</span>
            </div>

            :

            posts.map(post => (
              <BoxPost
                author={post.author}
                content={post.content}
                title={post.title}
                lastPostDate={post.lastPostDate}
                likes={post.likes}
                comments={post.comments}
              />
            ))
          }

        </div>
      </main>
    </Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  //@ts-ignore
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ])

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      content: RichText.asText(post.data.content),
      author: post.data.author,
      likes: post.data.likes,
      comments: post.data.comments,
      lastPostDate: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })


    }
  })
  return {
    props: {
      posts
    }
  }
}
