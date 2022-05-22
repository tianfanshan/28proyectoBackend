const { Category, Product } = require("../models/index");

const CategoryController = {
  create(req, res) {
    Category.create({ ...req.body })
      .then((category) =>
        res.status(201).send({ message: "category created", category })
      )
      .catch(console.error);
  },
  //Crea un endpoint que devuelva una categoría por id

  getById(req, res) {
    Category.findOne({
      where:
        //include: [Product],
        { id: req.params.id },
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