const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
    },
    emailId: {
      type: String,
      required: [true, "Email is required. "],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Password is required."],
    },
  },
  {
    timestamps: true,
  }
);
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
