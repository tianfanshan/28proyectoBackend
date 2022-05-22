'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert("Products", [
     {
       name: "GTA",
       price: 75.0,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Tiger woods golf 2022",
       price: 68.0,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Sim city",
       price: 55.0,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Legend of Zelda",
       price: 35.0,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Tekken",
       price: 25.0,
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
