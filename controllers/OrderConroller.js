const { Order } = require("../models/index");

const OrderController = {
  create(req, res) {
    Order.create({ ...req.body })
      .then(order =>
        res.status(201).send({ message: "category created", order })
      )
      .catch(console.error);
  },
};

module.exports = OrderController;