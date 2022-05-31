const {body} = require('express-validator');

exports.login = [
    body('username').isLength({min: 4, max: 10}),
];