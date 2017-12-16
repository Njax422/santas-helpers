// Models are the objects which represent tables in a database. They are the heart of ORM and we can define them with sequelize.define.


module.exports = function(sequelize, Sequelize) {
  var Child = sequelize.define("Child", {
    // Giving the Child model a name of type STRING
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        lens: [1]
      } 
    }, 
    lname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        lens: [1]
      }
    },
    //parent id
    //access_token
    //nice - boolean
    nice: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  Child.associate = function(models) {
    //note lower case user is used because that is the way passport does it
    Child.belongsTo(models.user);

    Child.hasMany(models.Gift, {
      onDelete: "cascade"
    });// Associating Child with Posts
    
    Child.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };

  return Child;
};
