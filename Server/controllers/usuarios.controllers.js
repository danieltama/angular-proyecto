 const Usuario = require('../models/User');

 const usuarioCtrl = {};

 usuarioCtrl.getUsuarios = async (res, req) => {
     const usuarios = await Usuario.find();
     res.json(usuarios);
 };

 usuarioCtrl.getUsuario = async (res, req) => {
     const usuario = await Usuario.findById(req.params.id);
     res.json(usuario);
 };

 usuarioCtrl.editUsuario = async (res, req) => {
     const { id } = req.params;
     const usuario = { 
         username: req.body.username,
         password: req.body.password
     };
     await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
     res.json({status: 'Usuario Actualizado'});
 };

 usuarioCtrl.deleteUsuario = async (res,req) => {
     await Usuario.findByIdAndRemove(req.params._id);
     res.json({status: 'Usuario Eliminado'});
 };


module.exports = usuarioCtrl;