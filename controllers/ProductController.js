const req = require('express/lib/request');
const { Product, Sequelize, Category } = require('../models/index');
const { Op } = Sequelize;

const ProductController = {
  create(req, res) {
    Product.create({ ...req.body })
      .then((product) =>
        res.status(201).send({ message: "Product created!", product })
      )
      .catch(error=>{
        error.origin = 'Product'
        next(error)
      });
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
    Product.findAll({
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
        where: {
          id: req.params.id,
        },
        include: [],
      }
    );
    res.send("Product upgraded successfully!");
  },

  // Filtro para buscar producto por precio
  getProductByPrice(req, res) {
    Product.findOne({
      where: {
        price: req.params.price,
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
  // Filtro que ordene los productos de mayor a menor precio
  orderPrices(req, res) {
    Product.findAll({ order: [["price", "DESC"]] })
      .then((products) => res.send(products))
      .catch(console.error);
  },

  insert(req, res) {
    Product.create({ ...req.body })
      .then((product) => {
        product.addCategory(req.body.CategoryId);
        res.send(product);
      })
      .catch((err) => console.error(err));
  },
//El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
  async getAllWithCategories(req, res) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      res.send(products);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
};
module.exports = ProductController;
