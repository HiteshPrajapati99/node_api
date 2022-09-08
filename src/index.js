const express = require("express");
const app = express();
const mongoose = require("mongoose");

const studentrouter = express.Router();
const student = require("./api/api")(studentrouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("", student);
//connection code
mongoose.connect("mongodb://localhost:27017/student");
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("connected");
});

conn.on("disconnect", function () {
  console.log("diconnect");
});

conn.on("err", function (err) {
  console.log(err);
});

app.listen(8080, () => {
  console.log("port runing");
});
