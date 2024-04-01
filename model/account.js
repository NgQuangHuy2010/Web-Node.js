const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
      },
  pass: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },


});
module.exports = mongoose.model('account', accountSchema);