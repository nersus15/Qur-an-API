// import moduls, packages
const mongoose = require( 'mongoose' );

// Create Schema
const suratSchema = mongoose.Schema( {
    nomer_surat: { type: Number, required: true, primary: true },
    nama_surat: { type: String, required: true },
    nama_dalam_indonesia: { type: String, required: true },
    jumlah_ayat: { type: Number, required: true },
    ayats: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ayats'
        }
    ]
} );

module.exports = mongoose.model( 'surats', suratSchema )