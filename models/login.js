// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
const bcrypt = require("bcrypt-nodejs");
const validator = require('validator');
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Login", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{value} is not a valid email'
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      minlength: 6,
      allowNull: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // // In this case, before a User is created, we will automatically hash their password
  // User.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });
  return User;
};