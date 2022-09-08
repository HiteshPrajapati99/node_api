const mongoose = require("mongoose");

var std = mongoose.Schema;
var student = new std({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("collage", student);
