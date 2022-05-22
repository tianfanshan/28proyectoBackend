const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.post("/", CategoryController.create);
router.get("/id/:id", CategoryController.getById);
router.get("/getbyname/:name", CategoryController.getByName);
router.delete("/delete/:id", CategoryController.deleteCategory);
router.put("/update/:id", CategoryController.updateCategory);
router.get("/getall/", CategoryController.getAll);
module.exports = router;
