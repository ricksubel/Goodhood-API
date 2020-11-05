// imports
const router = require('express').Router();
const ctrl = require('../controllers');
const auth = require('../middleware/authRequired');

// routes
router.get('/', ctrl.posts.index);
router.get('/:id', ctrl.posts.show);
router.post('/', auth, ctrl.posts.create);
router.put('/:id', auth, ctrl.posts.update);
router.delete('/:id', auth, ctrl.posts.destroy);

// exports
module.exports = router;
