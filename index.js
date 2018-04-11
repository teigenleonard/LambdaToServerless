const serverless = require( 'serverless-http' );
const express = require( 'express' );
const app = express();

  // triggered by index.handler and sendMessage in AWS
app.get('/', function (req, res) {
    res.send( 'Hello World!' )
});

module.exports.handler = serverless(app);
