const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentasSchema = new Schema({
    cantidad: {type: Number, required: true},
    producto: {type: String, required: true},
    total: {type: Number, require: true}
});

module.exports = mongoose.model('Venta', VentasSchema);