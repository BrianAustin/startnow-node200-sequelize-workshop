'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    const Author = sequelize.define('author', {/* ... */})
    const Blog = sequelize.define('blog', {/* ... */})
    Author.hasMany(Blog)
  };
  return Author;
};