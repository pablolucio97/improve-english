import { FaRegCommentDots, FaHeart } from 'react-icons/fa'

import { Container } from './styles'
import Header from '../../components/Header'
import { getPrismicClient } from '../../services/prismic'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'
import { SinglePostProps } from '../../types/Post'
import Prismic from '@prismicio/client'
import { useRouter } from 'next/router'


export default function Post({
    post
}: SinglePostProps) {

    const router = useRouter()

    return (
        <Container>
            <Header />
            {router.isFallback ?
                <h1>Loading...</h1>
                :
                (
                    <article>
                        <h2>{post.title}</h2>
                        <span>{post.content}</span>
                        <div>
                            <p>{post.author}</p>
                            <p>
                                {post.lastPostDate}
                            </p>
                        </div>
                        <ul>
                            <li><FaRegCommentDots size={18} /></li>
                            <li>
                                <p>{post.comments}</p>
                            </li>
                            <li><FaHeart color='#ff0000' size={18} /></li>
                            <li>
                                <p>{post.likes}</p>
                            </li>
                        </ul>
                    </article>
                )}

        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    //@ts-ignore   
    const prismic = await getPrismicClient();
    const posts = await prismic.query(
        [Prismic.predicates.at('document.type', 'post')]
    )

    const paths = posts.results.map(post => {
        return {
            params: {
                slug: post.uid
            }
        }
    })


    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    //@ts-ignore
    const prismic = getPrismicClient()

    const { slug } = ctx.params

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug: response.uid,
        title: RichText.asText(response.data.title),
        content: RichText.asText(response.data.content),
        author: response.data.author,
        likes: response.data.likes,
        comments: response.data.comments,
        lastPostDate: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    console.log(post)

    return {
        props: {
            post
        }
    }
}