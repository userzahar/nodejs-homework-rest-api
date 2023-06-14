const express = require("express");
const { authenticate } = require("../../middlewares");
const { isValidId, validateBody } = require("../../middlewares");
const router = express.Router();
const { schemas } = require("../../models");
const controller = require("../../controllers/contacts");

router.get("/", authenticate, controller.getContactRoute);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  controller.getContactRouteByID
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.contactPush),
  controller.postContactRoute
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  controller.deleteContactRoute
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.contactPush),
  controller.putContactRoute
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controller.updateStatusContact
);

module.exports = router;
