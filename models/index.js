// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_name",
  // Products belongsTo Category
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  // Categories have many Products
});

Product.belongsToMany(Tag, {
  foreignKey: "tag_name",
  // Products belongToMany Tags (through ProductTag)
});

Tag.belongsToMany(Product, {
  foreignKey: "tag_name",
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
