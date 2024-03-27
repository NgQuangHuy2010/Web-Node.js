const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  keywords: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
  default:  Date.now,
  },
  status: {
    type: Number,
    require: true,
  },

});
module.exports = mongoose.model('category', categorySchema);