import Header from '../components/Header'
import BoxPost from '../components/BoxPost'
import Search from '../components/Search'
import { data } from '../utils/data'
import { Posts } from '../types/Post'
import { Container } from './styles'
import { FaFlagUsa } from 'react-icons/fa'

export default function Home({ }: Posts) {

  return (
    <Container>
      <Header />
      <Search />
      <main>
        <h1><FaFlagUsa color='#e6473c' style={{ margin: 8 }} />Last posts</h1>
        <div className="filterContainer">
          <strong>Filter your post by:</strong>
          <button>Release date</button>
          <button>Alphabeticallly</button>
          <button>Most relevants</button>
        </div>
        <div>
          {data.map(post => (
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
