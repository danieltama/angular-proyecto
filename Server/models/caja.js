const mongoose = require('mongoose');
const { Schema } = mongoose;

const CajaSchema = new Schema({
    cierrea: {type: Number, required: true},
    fechaa: {type: String, required: true},
    saldot: {type: Number, require: true},
    hora: {type: String, require: true},
    fechap: {type: String, requiere: true},
    caja: {type: Number, requiere: true},
    retiro: {type: Number, requiere: true}
});

module.exports = mongoose.model('caja', CajaSchema);