import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispach => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(payload =>
      dispach({
        type: FETCH_POSTS,
        payload
      })
    )
    .catch(error => console.error(error));
};
