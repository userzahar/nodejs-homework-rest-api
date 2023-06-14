const express = require("express");
const controllers = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");
const { schemasUser } = require("../../models/");

const router = express.Router();
// signup
router.post(
  "/register",
  validateBody(schemasUser.registerSchema),
  controllers.register
);
router.post("/login", validateBody(schemasUser.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemasUser.updateStatusSchema),
  controllers.subscription
);

module.exports = router;
