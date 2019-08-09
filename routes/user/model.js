const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  account_created: {
    type: String,
    default: Date.now()
  },
  foreName: {
    type: String,
    required: true
  },
  foreName: {
    type: String,
    required: true
  }
});
