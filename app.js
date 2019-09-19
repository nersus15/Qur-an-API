// import moduls, packages
const express = require( 'express' );
const app = express();

// import routers
const suratRouts = require( './api/routes/surats' );

// use middleware
app.use( '/surats', suratRouts );

module.exports = app;