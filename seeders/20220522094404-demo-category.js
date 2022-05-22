'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert("Categories", [
    {
      name: "Action",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sports",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "City building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Adventure",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Fighting",
      createdAt: new Date(),
      updatedAt: new Date()
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
