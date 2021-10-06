import { FaRegCommentDots, FaHeart } from 'react-icons/fa'
import { format } from 'date-fns'

import { Container } from './styles'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { data } from '../../utils/data'


export default function Post() {


    const dataExampleTitle = data[0].title
    const dataExampleAuthor = data[0].author
    const dataExampleContent = data[0].content
    const dataExampleLastPostDate = data[0].lastPostDate
    const dataExampleLikes = data[0].likes
    const dataExampleComments = data[0].comments

    return (
        <Container>
            <Header />
            <Search />
            <article>
                <h2>{dataExampleTitle}</h2>
                <span>{dataExampleContent}</span>
                <div>
                    <p>{dataExampleAuthor}</p>
                    <p>
                        {format(new Date(dataExampleLastPostDate), "yyyy/MMM/dd")}
                    </p>
                </div>
                <ul>
                    <li><FaRegCommentDots size={18} /></li>
                    <li>
                        <p>{dataExampleComments}</p>
                    </li>
                    <li><FaHeart color='#ff0000' size={18} /></li>
                    <li>
                        <p>{dataExampleLikes}</p>
                    </li>
                </ul>
            </article>
        </Container>
    )
}