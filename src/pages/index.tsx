import Header from '../components/Header'
import BoxPost from '../components/BoxPost'
import Search from '../components/Search'
import { data } from '../utils/data'
import { Posts, PostProps } from '../types/Post'
import { Container } from './styles'
import { FaFlagUsa } from 'react-icons/fa'

import { useEffect, useState } from 'react'


export default function Home({ }: PostProps) {


  const [posts, setPosts] = useState<PostProps[]>(data as any)
  const [search, setSearch] = useState('sdfdf')


  function sortPostsAlphabetically(posts: PostProps[]) {
    const returnedPosts = posts.sort((a, b) => {
      if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) return -1;
      if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) return 1;
      return 0;
    });

    setPosts([...returnedPosts])

  }

  function sortPostsByRelevance(posts: PostProps[]) {
    const returnedPosts = posts.sort((a, b) => {
      if (a.likes < b.likes) return 1;
      if (a.likes > b.likes) return -1;
      return 0;
    });
    setPosts([...returnedPosts])

  }

  function searchPost(term: string) {

    const foundPosts = []
    const found = posts.find(post => post.title.search(term))


    if (found) {
      foundPosts.push(found)
      console.log(foundPosts)
      console.log(found)
      console.log(term)
      setPosts([...foundPosts])
    }
  }

  useEffect(() => {
    setPosts(posts)
  }, [posts, sortPostsByRelevance, sortPostsAlphabetically])


  useEffect(() => {
    if (search === '') {
      setPosts(data)
    }
  }, [posts, search])



  return (
    <Container>
      <Header />
      <Search
        searchPost={() => searchPost(search)}
        setTerm={e => setSearch(e.target.value)}
        term={search}
      />

      <main>
        <h1><FaFlagUsa color='#e6473c' style={{ margin: 8 }} />Last posts</h1>
        <div className="filterContainer">
          <strong>Filter your post by:</strong>
          <button >Release date</button>
          <button onClick={() => sortPostsAlphabetically(posts)}>Alphabeticallly</button>
          <button onClick={() => sortPostsByRelevance(posts)}>Most relevants</button>
        </div>
        <div>
          {posts.map(post => (
            <BoxPost
              author={post.author}
              content={post.content}
              title={post.title}
              lastPostDate={String(post.lastPostDate)}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}
