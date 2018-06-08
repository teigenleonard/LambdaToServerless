const serverless = require( 'serverless-http' );
const express = require( 'express' );
const app = express();

// triggered by index.handler and sendMessage in AWS
// ran into trouble with this call shorthand format with CORS

// how would i write this shorthand version with CORS headers?
app.get('/', function (req, res) {
    res.send( 'Hello World!' )
});

module.exports.handler = serverless(app);
