"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        category: "Fun",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Teach",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Memory",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Activate",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
