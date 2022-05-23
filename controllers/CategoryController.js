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
  // Filtro para buscar categoría por nombre
  getByName(req, res) {
    Category.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
    }).then((post) => res.send(post));
  },

  // Filtro para buscar categoría por nombre first try
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
  //Endpotin que actualiza un category por su id
  updateCategory(req, res) {
    Category.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Category upgraded successfully!");
  },

  //Endpotin que eliminar un category por su id
  async deleteCategory(req, res) {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("La category ha sido eliminada con éxito");
  },
  // endpoint para get todas los categories
  getAll(req, res) {
    Category.findAll({
    })
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({
            message: "Ha habido un problema al cargar las publicaciones",
          });
      });
  },
  
};
module.exports = CategoryController;