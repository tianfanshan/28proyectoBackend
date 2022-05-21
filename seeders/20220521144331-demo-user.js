'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert("Users", [
     {
       first_name: "John",
       last_name: "Smith",
       email: "john@example.com",
       password: "123456",
       role: "user",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       first_name: "Kevin",
       last_name: "Johnstone",
       email: "kevin@example.com",
       password: "1234567",
       role: "user",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       first_name: "Joanna",
       last_name: "Smitherson",
       email: "Joanna@example.com",
       password: "1234568",
       role: "user",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       first_name: "Bob",
       last_name: "Boots",
       email: "example@example.com",
       password: "1234569",
       role: "Admin",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       first_name: "Ben",
       last_name: "Dover",
       email: "ben@example.com",
       password: "12345611",
       role: "user",
       createdAt: new Date(),
       updatedAt: new Date(),
     }
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
