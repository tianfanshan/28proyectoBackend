const { Category, Product } = require("../models/index");

const CategoryController = {
  create(req, res) {
    Category.create({ ...req.body })
      .then((category) =>
        res.status(201).send({ message: "category created", category })
      )
      .catch(console.error);
  },
  //El endpoint para ver todas las categorías junto a los productos que tienen

  getAll(req, res) {
    Category.findAll({
      include: [Product],
    })
      .then((categories) => res.send(categories))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "There was a problem. :(",
        });
      });
  },
};

module.exports = CategoryController;