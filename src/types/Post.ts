export type PostProps = {
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  lastPostDate: string;
};

export type Posts = {
    posts: PostProps[];
}