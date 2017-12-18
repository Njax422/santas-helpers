module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
        //note lower case user is used because that is the way passport does it
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    lastname: {
      type: Sequelize.STRING,
      notempty: true
    },
    username: {
      type: Sequelize.TEXT
    },
    about: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_login: {
      type:Sequelize.DATE
    },
    status: {
      type:Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });

    User.associate = function(models) {
    // Associating User with child
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Child, {
      onDelete: "cascade"
    });
    
  };

  return User;
}
