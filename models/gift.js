module.exports = function(sequelize, Sequelize) {
  var Gift = sequelize.define("Gift", {
    // Giving the Gift model a name of type STRING
    gift: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  //associations

  Gift.associate = function(models) {
    Gift.belongsTo(models.user);

  };

  return Gift;
};
