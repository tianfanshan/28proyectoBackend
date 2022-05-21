const { Category } = require("../models/index");

const CategoryController = {
  create(req, res) {
    Category.create({ ...req.body })
        .then(category =>res.status(201).send({ message: "category created", category }))
        .catch(console.error);
  },
};

module.exports = CategoryController;