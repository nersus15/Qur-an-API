// import moduls, packages
const mongoose = require( 'mongoose' );

// Create Schema
const suratSchema = mongoose.Schema( {
    surat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'surats'
    },
    nomer_ayat: { type: Number, required: true },
    arabic_text: { type: String, required: true },
    indo_text: { type: String, required: true },
    read_text: { type: String, required: true },

} );

module.exports = mongoose.model( 'ayats', suratSchema );