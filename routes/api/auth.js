const express = require("express");
const controllers = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemasUser } = require("../../models/");
const resizeAvatar = require("../../middlewares/resizeAvatar");

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
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  resizeAvatar,
  controllers.updateAvatar
);

module.exports = router;
