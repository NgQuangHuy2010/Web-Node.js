const category = require("../../model/category");
const categoryController = {
  listCategory: async (req, res) => {
    var data = await category.find();
    res.render("admin/category/list", {
      layout: "layout/Admin",
      listData: data,
    });
  },
  addCategory: async (req, res) => {
    var data = await category.find();
    res.render("admin/category/add", { layout: "layout/Admin" });
  },
  addPostCategory: async (req, res) => {
    try {
      var data = new category({
        name: req.body.name,
        keywords: req.body.keyword,
        desc: req.body.desc,
        status: req.body.status,
      });
      await data.save();
      res.redirect("/admin/category");
    } catch (error) {
      console.error(error);
    }
  },
  delCategory: async (req, res) => {
    try {
      await category.deleteOne({ "_id": req.params.id });

      res.redirect("/admin/category");
    } catch (error) {
      console.error(error);
    }
  },
  editCategory: async (req, res) => {
  try {
  
 
    res.render("admin/category/edit", { layout: "layout/Admin" });
  } catch (error) {
    console.error(error);
    
  }
  },
  editPostCategory: async (req, res) => {
    try {
      await category.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/admin/category");
    } catch (error) {
      console.error(error);
    }
     
    },
};
module.exports = categoryController;
