// import moduls, packages
const mongoose = require( 'mongoose' );

// Create Schema
const suratSchema = mongoose.Schema( {
    nomer_surat: { type: Number, required: true },
    nama_surat: { type: String, required: true },
    nama_dalam_indonesia: { type: String, required: true },
    jumlah_ayat: { type: Number, required: true },
} );

module.exports = mongoose.model( 'Surat', suratSchema )