import { getPost } from "./generics/get-post";

getPost(4).then(
    post => console.log(post.body.toUpperCase())
).catch(
    error => console.error(error)
).finally(
    () => console.log('End')
);