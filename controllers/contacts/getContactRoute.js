const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const getContactRoute = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  if (favorite) {
    const result = await Contact.find(
      { owner, favorite },
      "name email phone favorite",
      {
        skip,
        limit,
      }
    ).populate("owner", "name email phone favorite");
    return res.json(result);
  }
  const result = await Contact.find({ owner }, "name email phone favorite", {
    skip,
    limit,
  }).populate("owner", "name email phone favorite");
  return res.json(result);
};

module.exports = ctrlWrapper(getContactRoute);
