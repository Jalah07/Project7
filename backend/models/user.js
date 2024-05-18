const { sq } = require("../config/db");
const uniqueValidator = require('mongoose-unique-validator');
const { password } = require("pg/lib/defaults");
const { DataTypes } = require("sequelize");

// const userSchema = mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

const userSchema = sq.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  
    fullName: {
      type: DataTypes.STRING,
    },
    employed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    password: {
        type: DataTypes.STRING,
      },
  });


userSchema.plugin(uniqueValidator);
module.exports = sq.model('User', userSchema);