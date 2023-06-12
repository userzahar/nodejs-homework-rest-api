const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const getContactRoute = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "name email phone favorite", {
    skip,
    limit,
  }).populate("owner", "name email phone favorite");
  res.json(result);
};

module.exports = ctrlWrapper(getContactRoute);
