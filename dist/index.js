"use strict";
console.log('Welcome to typeScript-core');
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
