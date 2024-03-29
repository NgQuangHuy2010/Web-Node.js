const express= require('express');
const routers= express.Router();
const categoryController= require("../controller/admin/categoryController");

routers.get("/category", categoryController.listCategory)
routers.get("/add-category", categoryController.addCategory)
routers.post("/add-category", categoryController.addPostCategory)
routers.get("/del-category/:id", categoryController.delCategory)
routers.get("/edit-category/:id", categoryController.editCategory)
routers.post("/edit-category/:id", categoryController.editPostCategory)


module.exports = routers
