"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      story.belongsTo(models.category);
      story.hasMany(models.page);
    }
  }
  story.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
