const products = require("../../model/products");
const path=require("path");
const fs=require("fs");
const productsController = {
  listProducts: async (req, res) => {
    var data = await products.find();
    res.render("admin/products/list", {
      layout: "layout/Admin",
      listData: data,
    });
  },
  addProducts: async (req, res) => {
    var data = await products.find();
    res.render("admin/products/add", { layout: "layout/Admin" });
  },
  addPostProducts: async (req, res) => {
    try {
      const nameimage = req.file ? req.file.filename : null;
      const data = new products({
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        status: req.body.status,
        image: nameimage,
      });
      console.log(data);
      await data.save();
      res.redirect("/admin/products");
    } catch (error) {
      console.log(error);
    }
  },
  deleteProducts:async (req, res) => {
    try {
      const dataOld = await products.findOne({ _id: req.params.id })
      fs.unlinkSync("./public/assets/file/"+dataOld.image)
      await products.findOneAndDelete({_id: req.params.id });
      res.redirect("/admin/products");

    } catch (error) {
        console.log(error);
    }
  },
};
module.exports = productsController;
