'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Orders", [
      {
        Items_bought: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Items_bought: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Items_bought: 2,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Items_bought: 1,
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Items_bought: 1,
        UserId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
