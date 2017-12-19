module.exports = function(sequelize, Sequelize) {
  var Task = sequelize.define("Task", {
    // Giving the Task model a name of type STRING
    task: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    userId: {
      type: Sequelize.INTEGER,
    }
  });

  //associations

  Task.associate = function(models) {
    Task.belongsTo(models.user);
   
  };

  return Task;
};
