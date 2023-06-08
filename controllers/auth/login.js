const bcryptjs = require("bcryptjs");

const { User } = require("../../models");

const { ctrlWrapper, httpError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw httpError(401, "Email or password invalid");
  }
  const passwordCompare = await bcryptjs.compare(password, user.password);
  if (!passwordCompare) {
    throw httpError(401, "Email or password invalid");
  }
  const token = "osdfuhfs.dsfsdf.dsfsdf";
  res.json({
    token,
  });
};

module.exports = ctrlWrapper(login);
