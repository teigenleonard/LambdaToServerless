const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );

// AWS SDK and AWS config file
const Amplify = require( 'aws-amplify' );
// const config = require( '/Users/teigenleonard/WebstormProjects/charter/config' );


// just added and has not been written into 'Amplify.configure' function.
const jsonPath = path.join(__dirname, '..', 'config.json');
const rawdata = fs.readFileSync(jsonPath);
const configValues = JSON.parse(rawdata);

const app = express();

// 'configure' not recognized as a function in node debugging. not updated w 'configValues'
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static( '/server/public/'));

app.get('/', function(req,res){
    res.sendFile( path.resolve( '/server/public/views/index.html'));
});

app.listen(app.get( 'port' ), function(){
    console.log( 'Listening on port: ', app.get( 'port'));
});

module.exports = app;
