const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/ProductController");
const { authentication, isAdmin } = require("../middleware/authentication");


router.post("/", authentication, ReviewController.create);
// router.get("/", authentication, ReviewController.);

module.exports = router;