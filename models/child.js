// Models are the objects which represent tables in a database. They are the heart of ORM and we can define them with sequelize.define.


module.exports = function(sequelize, DataTypes) {
  var Child = sequelize.define("Child", {
    // Giving the Child model a name of type STRING
    name: DataTypes.STRING
  });

  Child.associate = function(models) {
    // Associating Child with Posts
    // When an Child is deleted, also delete any associated Posts
    // Child.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });
  };

  return Child;
};
