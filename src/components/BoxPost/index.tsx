import { Container } from "./styles";
import { PostProps } from '../../types/Post'
import { FaRegCommentDots, FaHeart, } from 'react-icons/fa'
import { FiUser, FiClock } from 'react-icons/fi'
import { useRouter } from 'next/router'

export default function BoxPost({
    author,
    content,
    title,
    lastPostDate,
    likes,
    comments,
}: PostProps) {


    const router = useRouter()

    return (
        <Container onClick={() => { router.push(`posts/dfsdf`) }}>
            <h2>{title}</h2>
            <span>{content}</span>
            <div>
                <p>
                    <FiUser
                        style={{marginRight: 8}}
                    />
                    {author}
                </p>
                <p>
                    <FiClock
                        style={{marginRight: 8, marginLeft: 4}}
                    />
                    {lastPostDate}
                </p>
            </div>
            <ul>
                <li><FaRegCommentDots size={18} /></li>
                <li>
                    <p>{comments}</p>
                </li>
                <li><FaHeart color='#ff0000' size={18} /></li>
                <li>
                    <p>{likes}</p>
                </li>
            </ul>
        </Container>
    )
}