const isValidId = require("./isValidID");
const validateBody = require("./validateBody");
const authenticate = require("./authenticate");
const upload = require("./upload");
const resizeAvatar = require("./resizeAvatar");

module.exports = {
  isValidId,
  validateBody,
  authenticate,
  upload,
  resizeAvatar,
};
