const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.post('/',ProductController.create);
router.get("/:id", ProductController.getProductById);

module.exports = router;