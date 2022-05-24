const { Order ,User ,Product} = require("../models/index");

const OrderController = {
  create(req, res) {
    Order.create({ ...req.body },{
      include:[User]
    })
      .then(order =>
        res.status(201).send({ message: "order created", order })
      )
      .catch(console.error);
  },
  getAllOrderWithProduct(req,res){
    Order.findAll({
      include: [Product],
    })
    .then((order) => res.send(order));
  }
};

module.exports = OrderController;