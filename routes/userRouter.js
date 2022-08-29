const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

router
  .route("/")
  .get(userController.getUsers)
  .post(userController.validate, userController.createNewUser);

router.route("/dashboard").get(userController.getDashboard);

router
  .route("/:id")
  .patch(userController.validate, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
