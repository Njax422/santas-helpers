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
    },
    // Adding child
      child_1_fname: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "Please Update Child's first name",
      validate: {
        len: [1]
      } 
    }, 
    child_1_nice: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

//associations

    User.associate = function(models) {
    
    User.hasMany(models.Gift, {
      onDelete: "cascade"
    });// Associating User with Posts
    
    User.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };

  return User;
}
