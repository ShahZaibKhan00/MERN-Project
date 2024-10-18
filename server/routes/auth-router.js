const express = require('express');
const router = express.Router();
const controller = require('../controller/auth-controller')
const signupSchema = require("../validation/auth-signup")
const validate = require("../middleware/validate")


// route through controller

router.route('/home').get(controller.index);
router.route('/register').post(validate(signupSchema), controller.register);
router.route('/login').post(controller.login);


// Route can de created of two SVGUnitTypes. phley wala simple ha dusry waly me hum 1 he sath sary method concatenate krwa kr krsakty han
router.get("/", (req, res) => {
    res.status(200).send("Welcome Router");
});

router.route("/login").get((req, res) => {
    res.status(200).send("Welcome Login")
})

module.exports = router;