const express = require( 'express' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const Amplify = require( 'aws-amplify' );
const config = require( './config' );

const app = express();

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    API: {
        endpoints: [
            {
                name: 'testApiCall',
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            }
        ]
    }
});

app.set( 'port', ( process.env.PORT || 5000 ));

app.use( express.static( '/server/public/'));

app.get('/', function(req,res){
    res.sendFile( path.resolve( '/server/public/views/index.html'));
});

app.listen(app.get( 'port' ), function(){
    console.log( 'Listening on port: ', app.get( 'port'));
});

module.exports = app;
