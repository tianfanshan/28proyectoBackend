const { Product } = require('../models/index')

const ProductController={
    create(req,res){
        Product.create({...req.body})
        .then(product=>res.status(201).send({message:"Product create!",product}))
        .catch(console.error)
    }
}

module.exports = ProductController;