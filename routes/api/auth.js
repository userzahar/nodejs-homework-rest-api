const express = require("express");
const controllers = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");
const { schemasUser } = require("../../models/");

const router = express.Router();
// signup
router.post(
  "/register",
  validateBody(schemasUser.registerSchema),
  controllers.register
);

module.exports = router;
