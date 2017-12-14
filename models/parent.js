module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    // Giving the Parent model a name of type STRING
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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  });

  Parent.associate = function(models) {
    // Associating Parent with child
    // When an Parent is deleted, also delete any associated Posts
    Parent.hasMany(models.Child, {
      onDelete: "cascade"
    });
    
  };

  return Parent;
};
