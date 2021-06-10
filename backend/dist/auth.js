"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var app_config_1 = require("./app-config");
var user_1 = require("./user");
exports.handleAuthentication = function (req, res) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = user_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, app_config_1.apiConfig.secret);
        res.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        res.status(403).json({ message: "Dados inválidos." });
    }
};
function isValid(user) {
    if (!user)
        return false;
    var dbUser = user_1.users[user.email];
    return dbUser != undefined && dbUser.matches(user);
}
