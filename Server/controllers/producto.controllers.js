const Producto = require('../models/productos');

const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    const productos =  await Producto.find();
    res.json(productos);
};

productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        preciou: req.body.preciou
    });
    await producto.save();
    res.json({
        'status': 'Producto Guardado'
    });
};

productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

productoCtrl.editProducto = async (req, res) => {
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        preciou: req.body.preciou
    };
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto Actualizado'});
};

productoCtrl.deleteProducto = async (req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Eliminado'});
};



module.exports = productoCtrl;