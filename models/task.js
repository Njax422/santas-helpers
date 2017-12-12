module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    // Giving the Task model a name of type STRING
    name: DataTypes.STRING
  });

  Task.associate = function(models) {
    // Associating Task with Posts
    // When an Task is deleted, also delete any associated Posts
    // Task.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });
  };

  return Task;
};
