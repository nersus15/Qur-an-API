// import package, moduls
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const suratModel = require( '../models/surat' );

module.exports = {
    getAllSurat: async ( req, res, next ) => {
        try {
            const docs = await suratModel.find()
                .select( "nomer_surat nama_surat nama_dalam_indonesia jumlah_ayat" )
                .sort( { nomer_surat: 1 } );
            if ( docs ) {
                const response = {
                    count: docs.length,
                    surats: docs.map( doc => {
                        return {
                            id: doc._id,
                            nomer_surat: doc.nomer_surat,
                            nama_surat: doc.nama_surat,
                            nama_dalam_indonesia: doc.nama_dalam_indonesia,
                            jumlah_ayat: doc.jumlah_ayat,
                            daftar_ayat: doc.ayats,
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
        } catch ( err ) {
            res.status( 500 ).json( { error: err } );
        }
    },
    getSuratByNomerSurat=async
}