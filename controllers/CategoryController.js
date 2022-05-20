const category = require("../models/category");
const { Category } = require("../models/category");

const CategoryController = {
  Category(req, res) {
    category
      .create({ ...req.body })
      .then((category) =>
        res.status(201).send({ message: "categoria creado", category })
      )
      .catch(console.error);
  },
};

module.exports = CategoryController;

//// comentariossss
//otro linea
//3 linea
//4

//5
//6
