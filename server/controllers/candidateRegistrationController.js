const candidate = require("../models/candidate.model.js");
const candidateRegistrationController = async (req, res) => {
  const {
    chainID,
    email,
    name,
    wardNo,
    description,
    party,
    dob,
    qualification,
    voterId,
    Adhaar,
  } = req.body;
  if (
    chainID &&
    name &&
    partyName &&
    description &&
    wardNo &&
    candidateName &&
    email &&
    party &&
    dob &&
    qualification &&
    voterId
  ) {
    const findCandidate = await candidate.findOne({ email });
    if (findCandidate) {
      return res.status(400).json({ message: "Candidate already exists." });
    }
    const payload = {
      chainID,
      email,
      name,
      wardNo,
      description,
      party,
      dob,
      qualification,
      voterId,
      Adhaar,
    };
    await candidate.create(payload);
    return res.status(201).json({ success: true, message: "Candidate added." });
  }

  return res.status(400).json({ message: "All information not provided." });
};

module.exports = candidateRegistrationController;
