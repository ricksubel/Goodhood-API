// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.cities.index);
router.get('/:id', ctrl.cities.show);
router.post('/', ctrl.cities.create);
router.put('/:id', ctrl.cities.update);
router.delete('/:id', ctrl.cities.destroy);

// exports
module.exports = router;
