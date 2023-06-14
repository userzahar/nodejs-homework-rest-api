const bcryptjs = require("bcryptjs");

const { User } = require("../../models");

const { ctrlWrapper, httpError } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw httpError(409, "Email alredy in use");
  }
  const hashPassword = await bcryptjs.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = ctrlWrapper(register);
