import { Post } from './decorators/posts-class';

const photo = new Post('Photo');
// (Post.prototype as any) = 'Profile photo';
photo.publicAPI = 'https://google.com'
console.log(photo);