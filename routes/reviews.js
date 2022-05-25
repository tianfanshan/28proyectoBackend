const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/ReviewController");
const { authentication, isAdmin } = require("../middleware/authentication");


router.post("/", ReviewController.createReview);
router.get("/getreview/:id", ReviewController.getReviewById);
router.delete("/delete/:id", ReviewController.deleteReview);
router.put("/update/:id", ReviewController.updateReview);
router.get("/getallreviews/", ReviewController.getAllReviews);

module.exports = router;