'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User);
    }
  }
  Order.init({
    items_bought: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};