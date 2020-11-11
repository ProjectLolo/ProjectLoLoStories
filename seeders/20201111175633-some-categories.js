"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        category: "Animals",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
