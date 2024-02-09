import axios from "axios";
import { Post } from '../interfaces/post';


export const getPost = async(postId: number): Promise<Post> => {
    const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //console.log(data.title);
    return data;
}