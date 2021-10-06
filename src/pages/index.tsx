import Header from '../components/Header'
import BoxPost from '../components/BoxPost'
import Search from '../components/Search'
import { data } from '../utils/data'
import { Posts } from '../types/Post'

export default function Home({} : Posts) {

  return (
    <div>
      <Header />
      <Search />
      <main>
        <h1>Last posts</h1>
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
      </main>
      <div>
      </div>
    </div>
  )
}
