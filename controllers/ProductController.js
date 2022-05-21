const { Product } = require('../models/index')

const ProductController={
    create(req,res){
        Product.create({...req.body})
        .then(product=>res.status(201).send({message:"Product created!",product}))
        .catch(console.error)
    }
}

module.exports = ProductController;