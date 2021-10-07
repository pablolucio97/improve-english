import { useContext } from "react";
import {PostsContext} from '../context/PostContext'

export const usePosts = () => {
    return useContext(PostsContext)
}
