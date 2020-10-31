const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const authRequired = require("../middleware/authRequired");

router.get("/", authRequired, ctrl.user.show);
router.put('/:id', authRequired, ctrl.user.update);
router.delete('/:id', authRequired, ctrl.user.destroy);

module.exports = router;
