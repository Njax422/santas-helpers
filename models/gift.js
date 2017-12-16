module.exports = function(sequelize, Sequelize) {
  var Gift = sequelize.define("Gift", {
    // Giving the Gift model a name of type STRING
    gift: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Gift.associate = function(models) {
    Gift.belongsTo(models.Child);

    // Associating Gift with Posts
    // When an Gift is deleted, also delete any associated Posts
    // Gift.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });
  };

  return Gift;
};
