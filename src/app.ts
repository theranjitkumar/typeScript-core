import { Posts } from './posts';

export class App {
    name: string;
    constructor() {
        this.name = 'Ranjit';
        this.greet(this.name);
        new Posts().getPosts();
    }

    greet(name: string) {
        console.log(`Welcome ${name}`);
    }
}