const { Review, Sequelize } = require("../models/index");
const { Product, Sequelize, Category } = require("../models/index");
const { Op } = Sequelize;


const ReviewController = {
  createReview(req, res) {
    Review.create({ ...req.body })
      .then((review) =>
        res.status(201).send({ message: "Review created!" })
      )
      .catch(console.error);
  },
  // Endpoint que traiga un producto por su id
  getReviewById(req, res) {
    Review.findByPk(req.params.id, {})
      .then((reviews) => res.send(reviews))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "There was a problem. :(",
        });
      });
  },

  //Endpoint que elimina un producto por su id
  deleteReview(req, res) {
    Review.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.send({ message: "the review is successfully deleted" }));
  },
  
  //Endpotin que actualiza un producto por su id
  updateReview(req, res) {
    Review.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
        include: [],
      }
    );
    res.send("Review upgraded successfully!");
  },
};


module.exports = ReviewController;