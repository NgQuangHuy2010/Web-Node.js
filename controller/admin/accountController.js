const account = require("../../model/account");
const accountController = {
  listAccount: async (req, res) => {
    const data = await account.find();
    res.render("admin/account/list", {
      layout: "layout/Admin",
      listData: data,
    });
  },
  addAccount: async (req, res) => {
    try {
      // var data = await account.find();
      res.render("admin/account/add", { layout: "layout/Admin" });
    } catch (error) {
      console.log(error);
    }
  },
  addPostAccount: async (req, res) => {
    try {
      var data = new account({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        pass: req.body.pass,
      });
      await data.save();
      res.redirect("/admin/account");
    } catch (error) {
      console.log(error);
    }
  },
  editAccount: async (req,res) => {
    try {
        const data = await account.findById(req.params.id);
        res.render("admin/account/edit", { layout: "layout/Admin" ,loadData:data}); 
    } catch (error) {
        console.log(error);
    }
  },
  editPostAccount: async (req,res) => {
try {
    await account.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/admin/account");
} catch (error) {
    console.log(error);
}
  },
  deleteAccount: async (req,res) => {

    try {
        await account.findOneAndDelete({_id:req.params.id});
        res.redirect("/admin/account");
    } catch (error) {
        console.log(error);
    }
  },
};
module.exports = accountController;
