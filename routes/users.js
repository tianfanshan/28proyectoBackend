const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/authentication");

router.post("/", authentication, UserController.create);
router.get("/", authentication, UserController.getAll);
router.post("/login", UserController.login);

module.exports = router;
