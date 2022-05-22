const { Product } = require('../models/index')

const ProductController = {
  create(req, res) {
    Product.create({ ...req.body })
      .then((product) =>
        res.status(201).send({ message: "Product created!", product })
      )
      .catch(console.error);
  },
  // Endpoint que traiga un producto por su id
  getProductById(req, res) {
    Product.findOne({
      where: { id: req.params.id },
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "There was a problem. :(",
        });
      });
  },
};

module.exports = ProductController;