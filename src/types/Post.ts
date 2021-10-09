import { Dispatch, SetStateAction } from "react";

export type PostProps = {
  slug?: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  lastPostDate: string;
  redirect?: () => void;
};

export type Posts = {
  returnedPosts: PostProps[];
};

export type SinglePostProps = {
  post: PostProps;
};
