module.exports = function(sequelize, DataTypes) {
  var Gift = sequelize.define("Gift", {
    // Giving the Gift model a name of type STRING
    gift: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Gift.associate = function(models) {
    // Associating Gift with Posts
    // When an Gift is deleted, also delete any associated Posts
    // Gift.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });
  };

  return Gift;
};
