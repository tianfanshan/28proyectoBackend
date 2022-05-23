const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const { authentication } = require("../middleware/authentication");

router.post("/", authentication, CategoryController.create);
router.get("/id/:id", authentication, CategoryController.getById);
router.get("/getbyname/:name", authentication, CategoryController.getByName);
router.delete("/delete/:id", authentication, CategoryController.deleteCategory);
router.put("/update/:id", authentication, CategoryController.updateCategory);
router.get("/getall/",  authentication, CategoryController.getAll);
module.exports = router;
