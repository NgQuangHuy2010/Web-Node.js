const express = require("express");
const routers = express.Router();
const homeController = require("../controller/user/homeController");
const shopController = require("../controller/user/productsController");

routers.get("/home", homeController.index);
routers.get("/shop", shopController.index);

module.exports = routers;
