import axios from "axios";

export const getPost = async(postId: number) => {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    console.log(resp);
    return 1;
}