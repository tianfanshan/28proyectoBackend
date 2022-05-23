const req = require('express/lib/request');
const { Product, Sequelize } = require('../models/index');
const { Op } = Sequelize;

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
    Product.findByPk(req.params.id, {})
      .then((products) => res.send(products))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "There was a problem. :(",
        });
      });
  },
  //Endpoint que traigo un producto por su nombre
  getOneByName(req, res) {
    Product.findOne({
      where: {
        name: req.params.name,
      },
    }).then((product) => res.send(product));
  },
  //Endpoint que elimina un producto por su id
  delete(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.send({ message: "the product is successfully deleted" }));
  },
  //Endpoint que traigo un producto que contenga las letras que introduces
  getOneByString(req, res) {
    Product.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
    }).then((product) =>
      res.send({ message: "You just found the game you want", product })
    );
  },
  //Endpotin que actualiza un producto por su id
  update(req, res) {
    Product.update(
      { ...req.body },
      {
        where:{
          id:req.params.id
        },
        include:[]
      })
      res.send('Product upgraded successfully!')
  },

  // Filtro para buscar producto por precio
  getProductByPrice(req, res) {
    Product.findOne({
      where: {
        price: req.params.price
      },
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
