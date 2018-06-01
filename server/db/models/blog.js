'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    authorId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    article: DataTypes.TEXT,
    featured: DataTypes.BOOLEAN,
    published: DataTypes.DATE
  }, {});
  Blog.associate = function(models) {
    const Author = sequelize.define('author', {/* ... */})
    const Blog = sequelize.define('blog', {/* ... */})
    
  };
  return Blog;
};