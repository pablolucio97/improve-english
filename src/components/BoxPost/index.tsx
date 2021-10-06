import { Container } from "./styles";
import { PostProps } from '../../types/Post'
import { format } from "date-fns";
import { FaRegCommentDots, FaHeart } from 'react-icons/fa'

export default function BoxPost({
    author,
    content,
    title,
    lastPostDate,
    likes,
    comments,
}: PostProps) {
    return (
        <Container>
            <h2>{title}</h2>
            <span>{content}</span>
            <div>
                <p>{author}</p>
                <p>
                    {format(new Date(lastPostDate), "yyyy/MMM/dd")}
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