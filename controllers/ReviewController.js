const { Review, Sequelize, User } = require("../models/index");
// const { Product, Category, Review } = require("../models/index");
const { Op } = Sequelize;

// create review
const ReviewController = {
  createReview(req, res) {
    Review.create({ ...req.body })
      .then((review) =>
        res.status(201).send({ message: "Review created!", review })
      )
      .catch(console.error);
  },
  // Endpoint que traiga un review por su id
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

  //Endpoint que elimina un review por su id
  deleteReview(req, res) {
    Review.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.send({ message: "the review is successfully deleted" }));
  },

  //Endpotin que actualiza un review por su id
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

  getAllReviews(req, res) {
    Review.findAll({})
      .then((reviews) => res.send(reviews))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las reviews",
        });
      });
  },

  //  El endpoint de traer reviews debe mostrarlas junto al usuario que hizo esa review
  async getReviewsWithUser(req, res) {
    try {
      const reviews = await Review.findAll({
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name"], 
            
          },
        ],
      });
      res.send(reviews);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
};


module.exports = ReviewController;