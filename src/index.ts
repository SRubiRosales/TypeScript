import { Post } from './decorators/posts-class';

const photo = new Post('Photo');
// (Post.prototype as any) = 'Profile photo';
console.log(photo.savePostToDB(2));