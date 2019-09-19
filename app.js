// import moduls, packages
const express = require( 'express' );
const morgan = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const app = express();

// import routers
const suratRoutes = require( './api/routes/surats' );

/* use middleware */
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use( morgan( 'dev' ) );
app.use( ( req, res, next ) => {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization" );
    if ( req.method === 'OPTIONS' ) {
        res.header( 'Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE' );
        return res.status( 200 ).json( {} );
    }
    next();
} )

// Routes wich should Handle Request
app.use( '/surats', suratRoutes );

// Htpp Request Error Handler 
app.use( ( req, res, next ) => {
    const err = new Error( "Not Found" );
    err.status = 404;
    next( err );
} );
app.use( ( err, req, res, next ) => {
    res.status( err.status || 500 );
    res.json( {
        message: err.message
    } );
} )

/* end user middleware */
module.exports = app;