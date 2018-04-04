var express = require( 'express' );
var path = require( 'path' );
var app = express();

app.set( 'port', ( process.env.PORT || 4000 ));

app.use( express.static( './public/'));

app.get('/', function(req,res){
    res.sendFile( path.resolve( '.public/views/index.html'));
});

app.listen(app.get( 'port' ), function(){
    console.log( 'Listening on port: ', app.get( 'port'));
});

module.exports = app;
