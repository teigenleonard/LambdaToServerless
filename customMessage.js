'use strict';

function handler(event, context, callback) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Howdy from customMessage.js',
            input: event
        }),
    };
    if (event.triggerSource === 'CustomMessage_AdminCreateUser') {
        // ...
    }
    if (event.triggerSource === 'CustomMessage_ResendCode') {
        // ...
    }

    callback(null, response);

}