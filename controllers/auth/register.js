const { User } = require("../../models");
const { httpError, ctrlWrapper } = require("../../helpers");

const register = async (res, req) => {
  const newUser = await User.create(req.body);
  console.log("🚀 ", req.body);

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = ctrlWrapper(register);
