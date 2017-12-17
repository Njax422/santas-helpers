module.exports = function(sequelize, Sequelize) {
  var Task = sequelize.define("Task", {
    // Giving the Task model a name of type STRING
    task: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    competed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Child);
    // Associating Task with Posts
    // When an Task is deleted, also delete any associated Posts
    // Task.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });
  };

  return Task;
};
