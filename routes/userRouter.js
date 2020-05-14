const express = require("express");

const userController = require("./../controller/userController");
const router = express.Router();

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/:userId")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
