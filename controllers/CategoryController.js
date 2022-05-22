const { Category, Product, Sequelize } = require("../models/index");
const { Op } = Sequelize;

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
    Category.findByPk(req.params.id, {})
      .then((categories) => res.send(categories))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "There was a problem. :(",
        });
      });
  },

  getByName(req, res) {
    Category.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
    }).then((post) => res.send(post));
  },
};
  // Filtro para buscar categoría por nombre second try 
//   getByName(req, res) {
//     Category.findOne({
//       where: { name: req.params.name },
//     })
//       .then((categories) => res.send(categories))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).send({
//           message: "There was a problem. :(",
//         });
//       });
//   },


module.exports = CategoryController;