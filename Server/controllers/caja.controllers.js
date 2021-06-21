const Caja = require('../models/caja');

const cajaCtrl = {};

cajaCtrl.getcajs = async (req, res) => {
    const cajas =  await Caja.find();
    res.json(cajas);
};

cajaCtrl.createcaj = async (req, res) => {
    const caja = new Caja({
        cierrea: req.body.cierrea,
        fechaa: req.body.fechaa,
        saldot: req.body.saldot,
        hora: req.body.hora,
        fechap: req.body.fechap,
        caja: req.body.caja,
        retiro: req.body.retiro
    });
    await caja.save();
    res.json({
        'status': 'caja Guardado'
    });
};

cajaCtrl.getcaj = async (req, res) => {
    const caja = await Caja.findById(req.params.id);
    res.json(caja);
};

cajaCtrl.editcaj = async (req, res) => {
    const { id } = req.params;
    const caja = {
        cierrea : req.body.cierrea,
        fechaa : req.body.fechaa,
        saldot : req.body.saldot,
        hora : req.body.hora,
        fechap : req.body.fechap,
        caja : req.body.caja,
        retiro : req.body.retiro
    };
    await Caja.findByIdAndUpdate(id, {$set: caja}, {new: true});
    res.json({status: 'caja Actualizada'});
};

cajaCtrl.deletecaj = async (req, res) => {
    await Caja.findByIdAndRemove(req.params.id);
    res.json({status: 'caja Eliminada'});
};



module.exports = cajaCtrl;