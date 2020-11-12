"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("pages", [
      {
        content: "This would be the first story, page 1",
        image: "This would be the image for the first story, page 1",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 2",
        image: "This would be the image for the first story, page 2",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 3",
        image: "This would be the image for the first story, page 3",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 4",
        image: "This would be the image for the first story, page 4",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 5",
        image: "This would be the image for the first story, page 5",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 6",
        image: "This would be the image for the first story, page 6",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 7",
        image: "This would be the image for the first story, page 7",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 8",
        image: "This would be the image for the first story, page 8",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 9",
        image: "This would be the image for the first story, page 9",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the first story, page 10",
        image: "This would be the image for the first story, page 10",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 1",
        image: "This would be the image for the second story, page 1",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 2",
        image: "This would be the image for the second story, page 2",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 3",
        image: "This would be the image for the second story, page 3",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 4",
        image: "This would be the image for the second story, page 4",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 5",
        image: "This would be the image for the second story, page 5",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 6",
        image: "This would be the image for the second story, page 6",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 7",
        image: "This would be the image for the second story, page 7",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This would be the second story, page 8",
        image: "This would be the image for the second story, page 8",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pages", null, {});
  },
};
