const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isUser: {
    type: Boolean,
    default: true,
  },
},{
    timestamps: true
});
const User = mongoose.model("User", userSchema);

module.exports = User;