'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Orderproducts", [
      {
        OrderId: 1,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 2,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 3,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 4,
        ProductId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductId: 5,
        OrderId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
