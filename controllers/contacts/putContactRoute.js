const { Contact } = require("../../models");
const { httpError } = require("../../helpers");
const { ctrlWrapper } = require("../../helpers");

const putContactRoute = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404);
  }
  res.json(result);
};

module.exports = ctrlWrapper(putContactRoute);
