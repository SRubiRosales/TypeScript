import { getPost } from "./generics/get-post";

getPost(4).then(
    resp => console.log(resp)
).catch(
    error => console.error(error)
).finally(
    () => console.log('End')
);