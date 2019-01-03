"use strict";
console.log('Welcome to typeScript-core');
// https://api.github.com/users/theranjitkumar
var TsApp = /** @class */ (function () {
    function TsApp() {
        this.name = 'Ranjit';
        this.greet(this.name);
    }
    TsApp.prototype.greet = function (name) {
        console.log("Welcome " + name);
    };
    return TsApp;
}());
var test = new TsApp();
