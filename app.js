// import moduls, packages
const express = require( 'express' );
const morgan = require( 'morgan' );
const app = express();

// import routers
const suratRoutes = require( './api/routes/surats' );

// use middleware
app.use( morgan( 'dev' ) );

// Routes wich should Handle Request
app.use( '/surats', suratRoutes );

module.exports = app;