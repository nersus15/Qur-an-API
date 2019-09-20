// import moduls, packages
const mongoose = require( 'mongoose' );

// Create Schema
const suratSchema = mongoose.Schema( {
    surat: {
        type: Schema.Types.ObjectId,
        ref: 'surats'
    },
    nama_surat: { type: String, required: true },
    nama_dalam_indonesia: { type: String, required: true },
    jumlah_ayat: { type: Number, required: true },
} );

module.exports = mongoose.model( 'ayats', suratSchema );