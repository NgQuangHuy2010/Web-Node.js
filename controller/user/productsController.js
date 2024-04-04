
const products = require("../../model/products");

const shopController = {
    index: async (req, res) => {
        const productsShop= await products.find();
      res.render('user/shop', { layout: "layout/User" ,productsShop});
    }
  };
  module.exports = shopController;