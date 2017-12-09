module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    // Giving the Parent model a name of type STRING
    name: DataTypes.STRING
  });

  Parent.associate = function(models) {
    // Associating Parent with Posts
    // When an Parent is deleted, also delete any associated Posts
    Parent.hasMany(models.Child, {
      onDelete: "cascade"
    });
    Parent.hasMany(models.Tasks, {
      onDelete: "cascade"
    });
  };

  return Parent;
};
