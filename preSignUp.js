'use strict';

module.exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        autoConfirmUser: true,
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
            "message": 'Howdy from preSignUp.js'
        }),
    };

    callback(null, response);

};
