const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
const dbConnect = require("./config/dbConfig");
dbConnect();

// routes
// const adminAuthRouter = require("../routes/adminAuthRoute");
// const candidateRegistrationRouter = require("../routes/candidateRegistrationRoute");

// app.use("/admin/auth", adminAuthRouter);
// app.use("/candidate", candidateRegistrationRouter);
app.use(require("./routes/adminAuthRoute"));
app.use(require("./routes/candidateRegistrationRoute"));

// listening code
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
