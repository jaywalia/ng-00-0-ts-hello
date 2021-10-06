"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User() {
        var _this = this;
        console.log('constructor');
        var btn = document.getElementById("ts_greet");
        console.log(btn);
        btn.addEventListener("click", function (e) { return _this.Greet(e); });
        console.log('button bound!');
    }
    User.prototype.Greet = function (e) {
        // let first_name = document.getElementById('ts_user_first_name').value;
        // let last_name = document.getElementById('ts_user_last_name').value;
        var first_name = document.getElementById('ts_user_first_name').value;
        var last_name = document.getElementById('ts_user_last_name').value;
        var user_name = first_name + ' ' + last_name;
        var dif_ts_hello = document.getElementById('div_ts_hello');
        dif_ts_hello.innerText = "Hello " + user_name + "! From Javascript";
    };
    User.prototype.TSHello = function (e) {
        var message = 'Hello World by Type Script!';
        console.log(message);
        ;
    };
    return User;
}());
// start the app
new User();
