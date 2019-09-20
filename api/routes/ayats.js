// import package, moduls
const express = require( 'express' );
const router = express.Router();
const ayatModel = require( '../models/ayats' );

// Handler incoming POST request
router.post( '/ayat', ( req, res, next ) => {
    const newAyat = new ayatModel( {

    } );
} )

// Handler incoming GET request
router.get( '/:surat', ( req, res, next ) => {

} );