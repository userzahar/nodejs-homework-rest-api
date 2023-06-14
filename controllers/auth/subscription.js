const { User } = require("../../models");
const { httpError } = require("../../helpers");
const { schemasUser } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const subscription = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
    select: "name phone email favorite subscription",
  });
  if (!result) {
    throw httpError(404);
  }
  res.json(result);
};

module.exports = ctrlWrapper(subscription);
