// import package, moduls
const express = require( 'express' );
const router = express.Router();
const ayatModel = require( '../models/ayat' );
const suratModel = require( '../models/surat' );

// Handler incoming POST request
router.post( '/', ( req, res, next ) => {
    const newAyat = new ayatModel( {
        surat: '5d84e725655e52530cb7ec2b',
        nomer_ayat: req.body.nomerAyat,
        arabic_text: req.body.arabicText,
        indo_text: req.body.indoText,
        read_text: req.body.readText
    } );
    newAyat
        .save()
        .then( result => {
            console.log( result );
            suratModel.updateOne( { _id: result.surat }, { $push: { ayats: result } } ).exec();
            res.status( 200 ).json( {
                message: "New Ayat Successfull Add",
                ayatBaru: {
                    surat: result.surat,
                    nomer_ayat: result.nomer_ayat,
                    arabic_text: result.arabic_text,
                    indo_text: result.indo_text,
                    read_text: result.read_text,
                    request: {
                        descriptioin: "get the ayat",
                        type: "GET",
                        url: process.env.BASE_URL + 'ayat/' + result._id
                    }
                }
            } );
        } )
        .catch( err => {
            console.log( err );
            res.status( 500 ).json( { error: err } );
        } );
} )

// Handler incoming GET request
router.get( '/:surat', ( req, res, next ) => {

} );

module.exports = router;