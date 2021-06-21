const express = require('express');
const router = express.Router();

const producto = require('../controllers/producto.controllers');

router.get('/', producto.getProductos);
router.post('/', producto.createProducto);
router.get('/:id', producto.getProducto);
router.put('/:id', producto.editProducto);
router.delete('/:id', producto.deleteProducto);

module.exports = router;