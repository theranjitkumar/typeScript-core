import * as request from 'request';
export class PostService {
    readonly url = 'https://jsonplaceholder.typicode.com';
    constructor() {

    }

    getPosts() {
        request.get(`${this.url}/posts`, (err,res, body)=>{
            console.log(body);
        });
    }
}