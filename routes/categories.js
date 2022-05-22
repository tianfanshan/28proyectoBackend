const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.post("/", CategoryController.create);
router.get("/:id", CategoryController.getById);
router.get("/getbyname/:name", CategoryController.getByName);
module.exports = router;
