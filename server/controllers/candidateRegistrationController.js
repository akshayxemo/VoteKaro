const candidate = require("../models/candidate.model.js");
const candidateRegistrationController = async (req, res) => {
  const {
    chainId,
    email,
    name,
    wardNo,
    description,
    party,
    age,
    qualification,
    voterId,
    adhaar,
  } = req.body;

  console.log(req.body);
  if (
    chainId !== 0 &&
    name !== "" &&
    email !== "" &&
    wardNo !== "" &&
    description !== "" &&
    party !== "" &&
    age !== 0 &&
    qualification !== "" &&
    voterId !== "" &&
    adhaar !== ""
  ) {
    const findCandidate = await candidate.findOne({ email });
    if (findCandidate) {
      return res.status(400).json({ message: "Candidate already exists." });
    }
    const payload = {
      chainId,
      email,
      name,
      wardNo,
      description,
      party,
      age,
      qualification,
      voterId,
      adhaar,
    };
    await candidate.create(payload);
    return res.status(201).json({ success: true, message: "Candidate added." });
  }

  return res.status(400).json({ message: "All information not provided." });
};

module.exports = candidateRegistrationController;
