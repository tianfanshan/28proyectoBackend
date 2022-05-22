const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.post('/',ProductController.create);
router.get("/id/:id", ProductController.getProductById)
router.get('/name/:name',ProductController.getOneByName)
router.delete('/id/:id',ProductController.delete);
router.get('/string/:name',ProductController.getOneByString);
router.put('/update/:id',ProductController.update);

module.exports = router;