"use strict";
exports.__esModule = true;
var User = (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (username) {
            this._username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports["default"] = User;
