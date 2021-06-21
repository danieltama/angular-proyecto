const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    categoria: {type: String, required: true},
    preciou: {type: Number, require: true}
});

module.exports = mongoose.model('Productos', ProductoSchema);