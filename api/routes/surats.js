// import package, moduls
const express = require( 'express' );
const router = express.Router();

// get request
router.get( '/', ( req, res, next ) => {
    res.status( 200 ).json( {
        message: "GET Request Work",
    } );
} );
router.get( '/:suratNumber', ( req, res, next ) => {
    res.status( 200 ).json( {
        message: "Number of Surat: " + req.params.suratNumber,
    } );
} );
// ...

router.post( '/', ( req, res, next ) => {
    res.status( 200 ).json( {
        message: "POST Request Work",
    } );
} );
router.patch( '/', ( req, res, next ) => {
    res.status( 200 ).json( {
        message: "PATCH Request Work",
    } );
} );
router.delete( '/', ( req, res, next ) => {
    res.status( 200 ).json( {
        message: "DELETE Request Work",
    } );
} );
module.exports = router;