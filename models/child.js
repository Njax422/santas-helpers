// Models are the objects which represent tables in a database. They are the heart of ORM and we can define them with sequelize.define.


module.exports = function(sequelize, DataTypes) {
  var Child = sequelize.define("Child", {
    // Giving the Child model a name of type STRING
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        lens: [1]
      } 
    }, 
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        lens: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER
    },
    //parent id
    //access_token
    //nice - boolean
    nice: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Child.associate = function(models) {
    
    Child.belongsTo(models.Parent);

    Child.hasMany(models.Gift, {
      onDelete: "cascade"
    });// Associating Child with Posts
    
    Child.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };

  return Child;
};
