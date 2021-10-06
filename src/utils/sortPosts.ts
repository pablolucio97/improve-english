import { PostProps } from "../types/Post";

function sortPostsAlphabetically(posts: PostProps[]) {
   posts.sort((a, b) => {
    if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) return -1;
    if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) return 1;
    return 0;
});
console.log('sortedbyalpha')
}

function sortPostsByRelevance(posts: PostProps[]) {
    posts.sort((a, b) => {
      if (a.likes < b.likes) return 1;
      if (a.likes > b.likes) return -1;
      return 0;
    });
    console.log('sortedbyrelevance')
  }

export { sortPostsAlphabetically, sortPostsByRelevance };
