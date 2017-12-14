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
    //parent id
    //access_token
    //nice - boolean
    nice: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
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
