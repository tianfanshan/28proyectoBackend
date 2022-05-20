
const { Category } = require("../models/index");

const CategoryController = {
  create(req, res) {
    Category.create({ ...req.body })
        .then(category =>res.status(201).send({ message: "categoria creado", category }))
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
