"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var app_config_1 = require("./app-config");
exports.handleAuthorization = function (req, res, next) {
    var token = extractToken(req);
    if (!token) {
        res.setHeader('WWW-Authenticate', 'Bearer token-type="JWT"');
        res.status(401).json({ message: "Você precisa se autenticar" });
    }
    else {
        jwt.verify(token, app_config_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                res.status(403).json({ message: "Não autorizado. " });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        //Authorization: Bearer ZZZ.ZZZ.ZZZ
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
