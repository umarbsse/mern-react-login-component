const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const user_collection_name = "user_accounts";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});
const User = mongoose.model(user_collection_name,UserSchema)
module.exports = User;