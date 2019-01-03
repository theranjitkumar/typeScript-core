"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var PostService = /** @class */ (function () {
    function PostService() {
        this.url = 'https://jsonplaceholder.typicode.com';
    }
    PostService.prototype.getPosts = function () {
        request.get(this.url + "/posts", function (err, res, body) {
            console.log(body);
        });
    };
    return PostService;
}());
exports.PostService = PostService;
