"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const bcrypt = require("bcryptjs");

    return queryInterface.bulkInsert("Users", [
      {
        first_name: "John",
        last_name: "Smith",
        email: "john@example.com",
        password: bcrypt.hashSync("123456", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Kevin",
        last_name: "Johnstone",
        email: "kevin@example.com",
        password: bcrypt.hashSync("1234567", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Joanna",
        last_name: "Smitherson",
        email: "Joanna@example.com",
        password: bcrypt.hashSync("12345678", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Bob",
        last_name: "Boots",
        email: "example@example.com",
        password: bcrypt.hashSync("123456789", 10),
        role: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Ben",
        last_name: "Dover",
        email: "ben@example.com",
        password: bcrypt.hashSync("12345611", 10),
        role: "user",
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
