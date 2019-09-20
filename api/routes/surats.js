// import package, moduls
const express = require( 'express' );
const router = express.Router();
const mongoose = require( 'mongoose' );
const suratModel = require( '../models/surat' );

// Handle incoming GET request to /surats
router.get( '/', ( req, res, next ) => {
    suratModel.find()
        .select( "nomer_surat nama_surat nama_dalam_indonesia jumlah_ayat" )
        .exec()
        .then( docs => {
            console.log( docs );
            if ( docs ) {
                const response = {
                    count: docs.length,
                    surats: docs.map( doc => {
                        return {
                            nomer_surat: doc.nomer_surat,
                            nama_surat: doc.nama_surat,
                            nama_dalam_indonesia: doc.nama_dalam_indonesia,
                            jumlah_ayat: doc.jumlah_ayat,
                            request: {
                                descriptioin: "get the surat",
                                type: "GET",
                                url: process.env.BASE_URL + 'surats/' + doc.nomer_surat
                            }
                        };
                    } )
                };
                res.status( 200 ).json( response );
            } else {
                res.status( 404 ).json( { message: " Surat Not Found" } );
            }
        } )
        .catch( err => {
            res.status( 500 ).json( { error: err } );
        } );
} );
router.get( '/:nomerSurat', ( req, res, next ) => {
    const nomerSurat = req.params.nomerSurat;
    suratModel.findOne( { nomer_surat: nomerSurat } )
        .exec()
        .then( doc => {
            console.log( doc );
            if ( doc ) {
                res.status( 200 ).json( {
                    nomer_surat: doc.nomer_surat,
                    nama_surat: doc.nama_surat,
                    nama_dalam_indonesia: doc.nama_dalam_indonesia,
                    jumlah_ayat: doc.jumlah_ayat,
                    request: {
                        descriptioin: "get all surats",
                        type: "GET",
                        url: process.env.BASE_URL + 'surats/'
                    }
                } );
            } else {
                res.status( 404 ).json( { message: " Surat Not Found" } );
            }
        } )
        .catch( err => {
            res.status( 500 ).json( { error: err } );
        } );
} );
// ...

// Handle incoming POST request to /surats
router.post( '/', ( req, res, next ) => {
    const newSurat = new suratModel( {
        nomer_surat: req.body.nomerSurat,
        nama_surat: req.body.namaSurat,
        nama_dalam_indonesia: req.body.namaSuratIN,
        jumlah_ayat: req.body.jumlahAyat,
    } );
    newSurat
        .save()
        .then( result => {
            console.log( result );
            res.status( 200 ).json( {
                message: "You Success Creat New Surat",
                dataBaru: {
                    nomer_surat: result.nomer_surat,
                    nama_surat: result.nama_surat,
                    nama_dalam_indonesia: result.nama_dalam_indonesia,
                    jumlah_ayat: result.jumlah_ayat,
                    request: {
                        descriptioin: "get the surat",
                        type: "GET",
                        url: process.env.BASE_URL + 'surats/' + result.nomer_surat
                    }
                }
            } );
        } )
        .catch( err => {
            console.log( err );
            res.status( 500 ).json( { error: err } );
        } );
} );

// Handle incoming PATCH request to /surats
router.patch( '/:nomerSurat', ( req, res, next ) => {
    const nomerSurat = req.params.nomerSurat;
    const updateOptions = {};
    for ( const option of req.body ) {
        updateOptions[option.update] = option.value;
    }
    console.log( updateOptions );
    suratModel.updateOne( { nomer_surat: nomerSurat }, { $set: updateOptions } )
        .exec()
        .then( result => {
            console.log( "Updated: ", result );
            res.status( 200 ).json( {
                message: "Update Successfull ",
                request: {
                    descriptioin: "get the surat",
                    type: "GET",
                    url: process.env.BASE_URL + 'surats/' + nomerSurat
                }
            } );
        } )
        .catch( err => {
            res.status( 500 ).json( { error: err } );
        } );
} );

// Handle incoming DELETE request to /surats
router.delete( '/:nomerSurat', ( req, res, next ) => {
    const nomerSurat = req.params.nomerSurat;
    suratModel.deleteOne( { nomer_surat: nomerSurat } )
        .exec()
        .then( result => {
            console.log( 'deleted', result );
            res.status( 200 ).json( {
                message: "Delete Successfull",
                request: {
                    descriptioin: "get all surats",
                    type: "GET",
                    url: process.env.BASE_URL + 'surats/',
                }
            } );
        } )
        .catch( err => {
            console.log( err );
            res.status( 500 ).json( { Error: err } );
        } );
} );
module.exports = router;