"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("stories", [
      {
        title: "story 1",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "story 2",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
