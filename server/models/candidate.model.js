const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  chainId: {
    type: Number,
    required: [true, "Must provide candidate chain ID."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Must provide candidate email."],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Must provide candidate name."],
  },
  wardNo: {
    type: String,
    required: [true, "Must provide wardNo."],
  },
  description: {
    type: String,
    required: [true, "Must provide description."],
  },
  party: {
    type: String,
    required: [true, "Must provide party name."],
  },
  age: {
    type: Number,
    required: [true, "Must provide age"],
  },
  qualification: {
    type: String,
    required: [true, "Must provide Qualification info"],
  },
  voterId: {
    type: String,
    required: [true, "Must provide Voter ID"],
    unique: true,
  },
  adhaar: {
    type: String,
    unique: true,
  },
});
const candidate = mongoose.model("Candidate", schema);
module.exports = candidate;
