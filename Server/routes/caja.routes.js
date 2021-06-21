const express = require('express');
const router = express.Router();

const caja = require('../controllers/caja.controllers');

router.get('/', caja.getcajs);
router.post('/', caja.createcaj);
router.get('/:id', caja.getcaj);
router.put('/:id', caja.editcaj);
router.delete('/:id', caja.deletecaj);

module.exports = router;