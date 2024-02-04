const jwt = require("jsonwebtoken");
const admin = require("../models/admin.model.js");

const adminAuthController = async (req, res) => {
  const { emailId, password } = req.body;
  console.log("invoked");
  try {
    if ((emailId, password)) {
      const findAdmin = await admin.findOne({ emailId });
      console.log(findAdmin);
      if (findAdmin) {
        const token = jwt.sign({ _id: findAdmin._id }, "Diversion2k24", {
          expiresIn: "1d",
        });
        return res.status(201).json({
          success: true,
          message: "Admin signed in.",
          user: { id: findAdmin._id, name: findAdmin.emailId },
          token: token,
        });
      }
      return res
        .status(404)
        .json({ success: false, message: "Admin is not registered." });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const createNewAdmin = async (req, res) => {
  const { username, password, emailId } = req.body;
  try {
    if (username && password && emailId) {
      const findAdmin = await admin.findOne({ emailId });
      if (findAdmin) {
        return res.status(404).json({
          success: false,
          message: "Admin email is already registered.",
        });
      } else {
        const payload = {
          username,
          emailId,
          password,
        };
        await admin.create(payload);
        return res.status(201).json({ success: true, message: "Admin added." });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "Data not reached.",
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "something went wrong.",
      error: error,
    });
  }
};

module.exports = { adminAuthController, createNewAdmin };
