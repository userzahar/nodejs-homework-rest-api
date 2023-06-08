const { User } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const register = async (req, res) => {
  const newUser = await User.create(req.body);
  console.log("🚀 ", req.body);

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = ctrlWrapper(register);
