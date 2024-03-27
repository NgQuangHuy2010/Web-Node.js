const category=require("../../model/category");
const categoryController = {
    listCategory: async (req, res) => {
        var data= await category.find();
        res.render("admin/category/list",{layout:'layout/Admin'});
      },
      addCategory: async (req, res) => {
        var data= await category.find();
        res.render("admin/category/add",{layout:'layout/Admin'});
      },
    }
module.exports = categoryController;