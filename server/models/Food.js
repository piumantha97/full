const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    email:{
        type: String,
        required: false,
    },
  username: {
    type: String,
    required:false,
  },
  password: {
    type: Number,
    required: false,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
