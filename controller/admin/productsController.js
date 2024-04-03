const products = require("../../model/products");
const path=require("path");

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
      const  dataOld= await products.find({_id:req.params.id});
    //   fs.unlink(path.join(_di));
    //   console.log(dataOld);
      res.redirect("/admin/products");

    } catch (error) {
        console.log(error);
    }
  },
};
module.exports = productsController;
