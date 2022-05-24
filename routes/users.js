const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/",  UserController.create);
router.get("/", UserController.getAll);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
router.get("/getuserlogged", authentication, UserController.getUserLogged);


module.exports = router;
