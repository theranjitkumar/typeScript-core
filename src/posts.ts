import { PostService } from './post.service';
export class Posts {
    postid: number;
    postTitle: string;
    postContent: string;

    constructor() {

        this.postid = 1;
        this.postTitle = 'Test Title';
        this.postContent = 'Test content';
    }
    getPosts() {
        new PostService().getPosts()
        
    }
}