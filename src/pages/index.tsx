import Header from '../components/Header'
import BoxPost from '../components/BoxPost'
import Search from '../components/Search'
import { Posts, PostProps } from '../types/Post'
import { Container } from './styles'
import { FaFlagUsa } from 'react-icons/fa'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'

import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'



export default function Home({ returnedPosts }: Posts) {

  const router = useRouter()


  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState<PostProps[]>([])


  useEffect(() => {
    setPosts([...returnedPosts])
  }, [])

  useEffect(() => {
    if (search === '') {
      setPosts([...returnedPosts])
    }
  }, [search])



  function sortPostsAlphabetically(data: PostProps[]) {
    data.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });
    setPosts([...data]);
  }

  function sortPostsByRelevance(data: PostProps[]) {
    data.sort((a, b) => {
      if (a.likes < b.likes) return 1;
      if (a.likes > b.likes) return -1;
      return 0;
    });
    setPosts([...data]);
  }

  function sortPostsByReleaseDate(data: PostProps[]) {
    data.sort((a, b) => {
      if (a.lastPostDate.toLocaleLowerCase() < b.lastPostDate.toLocaleLowerCase())
        return 1;
      if (a.lastPostDate.toLocaleLowerCase() > b.lastPostDate.toLocaleLowerCase())
        return -1;
      return 0;
    });
    setPosts([...data]);
  }

  function searchPost(term: string) {

    const possibleTitles = posts.map(post => post.title.toLowerCase().split(" "))

    const concatTitles = possibleTitles.flat(1)

    if (concatTitles.includes(term)) {
      const filterFoundPosts = posts.filter(post => post.title?.toLocaleLowerCase().includes(term))
      setPosts([...filterFoundPosts])
    } else {
      setPosts([])
    }

  }

  return (
    <Container>
      <Header />
      <Search
        setTerm={e => setSearch(e.target.value)}
        term={search}
        searchPost={() => searchPost(search)}
      />

      <main>
        <h1><FaFlagUsa color='#e6473c' style={{ margin: 8 }} />Last posts</h1>
        <div className="filterContainer">
          <strong>Filter your post by:</strong>
          <button onClick={() => sortPostsByReleaseDate(posts)} >Release date</button>
          <button onClick={() => sortPostsAlphabetically(posts)}>Alphabeticallly</button>
          <button onClick={() => sortPostsByRelevance(posts)}>Most relevants</button>
        </div>
        <div>
          {posts.length === 0 ?

            <div className='noFoundPosts'>
              <span>Desculpe, não foi encontrado nenhum post para a pesquisa mencionada.</span>
            </div>

            :

            posts.map(post => (
              <BoxPost
                key={post.slug}
                author={post.author}
                content={post.content}
                title={post.title}
                lastPostDate={post.lastPostDate}
                likes={post.likes}
                comments={post.comments}
                redirect={() => router.push(`/posts/${post.slug}`)}
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

  const returnedPosts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      content: RichText.asText(post.data.content),
      author: post.data.author,
      likes: post.data.likes,
      comments: post.data.comments,
      lastPostDate: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })


    }
  })
  return {
    props: {
      returnedPosts
    }
  }
}
