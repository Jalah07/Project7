'use strict';
const {
  Model,
  INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    post: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    userRead: DataTypes.ARRAY(DataTypes.STRING)
    //TODO usersRead - array that holds numbers of users that read post
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};