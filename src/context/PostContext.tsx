import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { PostProps } from '../types/Post'
import { data } from '../utils/data'

type ChildrenProps = {
    children: ReactNode
}

type PostsContextPros = {
    posts: PostProps[];
    sortPostsByRelevance?: (posts: PostProps[]) => void;
    sortPostsAlphabetically?: (posts: PostProps[]) => void;
    searchPost?: (term: string) => void;
    setPosts: Dispatch<SetStateAction<any>>
}

export const PostsContext = createContext({} as PostsContextPros)

export const PostsProvider = ({ children }: ChildrenProps) => {

    const [posts, setPosts] = useState<PostProps[]>(data as any)


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



    return (
        <PostsContext.Provider value={{
            searchPost,
            sortPostsAlphabetically,
            sortPostsByRelevance,
            posts,
            setPosts
        }}>
            {children}
        </PostsContext.Provider>
    )
}