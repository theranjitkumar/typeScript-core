"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var posts_1 = require("./posts");
var App = /** @class */ (function () {
    function App() {
        this.name = 'Ranjit';
        this.greet(this.name);
        new posts_1.Posts().getPosts();
    }
    App.prototype.greet = function (name) {
        console.log("Welcome " + name);
    };
    return App;
}());
exports.App = App;
