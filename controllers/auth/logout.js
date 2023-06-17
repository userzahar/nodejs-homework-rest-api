const { httpError } = require("../../helpers");
const { User } = require("../../models");

const logout = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    httpError(401);
  }
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logout success",
  });
};

module.exports = logout;
