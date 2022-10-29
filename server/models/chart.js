'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chart.belongsTo(models.User, { foreignKey: "jobId" });
    }
  }
  Chart.init({
    userId: DataTypes.NUMBER,
    jobId: DataTypes.STRING,
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    title: DataTypes.STRING,
    howToApply: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chart',
  });
  return Chart;
};