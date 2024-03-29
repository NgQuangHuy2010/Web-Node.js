const express = require("express");
const mongoose = require("mongoose");
var expressLayouts = require('express-ejs-layouts');
const app = express();
app.listen(3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", function (request, response) {
  response.render("test");
});

const cate = require("./routers/categoryRouter");
app.use("/admin", cate); //phan cap router /admin/..

//ket noi csdl
mongoose.connect("mongodb://localhost:27017/shop_fruits", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("ok con de");
  })
  .catch((error) => console.error("ko ok", error));
