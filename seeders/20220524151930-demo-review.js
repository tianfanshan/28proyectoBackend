"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        name: "This product was great, I love running people down in a car.",
        ProductId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "I love this game, Tiger Wood swings both ways.",
        ProductId: 2,
        UserId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Building a city is not as fun as I thought",
        ProductId: 3,
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "I had a great adventure looking at a screen",
        ProductId: 4,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fighting is fun",
        ProductId: 5,
        UserId: 2,
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
