// import moduls, packages
const express = require( 'express' );
const morgan = require( 'morgan' );
const app = express();

// import routers
const suratRoutes = require( './api/routes/surats' );

/* use middleware */
app.use( morgan( 'dev' ) );

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