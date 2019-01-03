"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var post_service_1 = require("./post.service");
var Posts = /** @class */ (function () {
    function Posts() {
        this.postid = 1;
        this.postTitle = 'Test Title';
        this.postContent = 'Test content';
    }
    Posts.prototype.getPosts = function () {
        var data = new post_service_1.PostService().getPosts();
        console.log(data);
    };
    return Posts;
}());
exports.Posts = Posts;
