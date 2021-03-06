"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another != undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "viniciuslima@gmail.com": new User('viniciuslima@gmail.com', 'vinicius', '123'),
    "t@t": new User('t@t', 'Usuario', 't')
};
