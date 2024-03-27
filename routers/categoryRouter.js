const express= require('express');
const routers= express.Router();
const categoryController= require("../controller/admin/categoryController");

routers.get("/category", categoryController.listCategory)
routers.get("/add-category", categoryController.addCategory)

module.exports = routers
