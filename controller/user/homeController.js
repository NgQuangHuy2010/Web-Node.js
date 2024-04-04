const homeController = {
    index: async (req, res) => {
      res.render('user/home', { layout: "layout/User" });
    }
  };
  module.exports = homeController;
