const Venta = require('../models/ventas');

const ventaCtrl = {};

ventaCtrl.getVentas = async (req, res) => {
    const ventas = await Venta.find();
    res.json(ventas);
}

ventaCtrl.createVenta = async (req, res) => {
    const venta = Venta(req.body);
    await venta.save();
    res.json({
        'status': 'Venta Guardada'
    });
};

ventaCtrl.getVenta = async (req, res) => {
    const venta = await Venta.findById(req.params.id);
    res.json(venta);
}

ventaCtrl.editVenta = async (req, res) => {
    const { id } = req.params;
    const venta = {
        cantidad: req.body.cantidad,
        producto: req.body.producto,
        total: req.body.total
    };
    await Venta.findByIdAndUpdate(id, {$set: venta}, {new: true});
    res.json({status: 'venta actualizada'})
};

ventaCtrl.deleteVenta = async (req, res) => {
    await Venta.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Eliminado'});

}

module.exports = ventaCtrl;

