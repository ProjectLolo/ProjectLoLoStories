"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      page.belongsTo(models.story);
    }
  }
  page.init(
    {
      content: DataTypes.TEXT,
      image: DataTypes.TEXT,
      storyId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "page",
    }
  );
  return page;
};
