import { Dispatch, SetStateAction } from "react";

export type PostProps = {
  slug?: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  lastPostDate: string;
};

export type Posts = {
  returnedPosts: PostProps[];
}