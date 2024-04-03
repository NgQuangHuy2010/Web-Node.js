const express = require("express");
const router = express.Router();
const path=require("path");
const productsController = require("../controller/admin/productsController");
//cau hinh upload
const multer = require("multer");
//cau hinh noi luu
const store = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets/file");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: store });

router.get("/products", productsController.listProducts);
router.get("/add-products", productsController.addProducts);
router.post(
  "/add-products",
  upload.single("image"),
  productsController.addPostProducts
);
// router.get('/edit-products/:id',productsController.editProducts);
// router.post('/edit-products/:id',productsController.editPostProducts);
router.get('/delete-products/:id',productsController.deleteProducts);

module.exports = router;
