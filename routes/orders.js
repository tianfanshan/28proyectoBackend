const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.post('/',OrderController.create);
router.get('/getallorderwithproducts',OrderController.getAllOrderWithProduct)

module.exports = router;
