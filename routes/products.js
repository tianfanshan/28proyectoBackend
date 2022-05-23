const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController');
const { authentication, isAdmin } = require('../middleware/authentication');

router.post('/', authentication, ProductController.create);
router.get("/id/:id", authentication, ProductController.getProductById)
router.get('/name/:name', authentication, ProductController.getOneByName)
router.delete('/id/:id', authentication, isAdmin, ProductController.delete);
router.get('/string/:name',ProductController.getOneByString);
router.put('/update/:id',authentication, ProductController.update);
router.get("/byprice/:price", ProductController.getProductByPrice);
router.get("/orderprices/", ProductController.orderPrices);

module.exports = router;