const collage = require("../scema/student");
module.exports = function (student) {
  //post method
  student.post("/student", (req, res) => {
    const std = collage();
    //   console.log(req.body);
    std.name = req.body.name;
    std.email = req.body.email;
    std.password = req.body.password;
    std.save();
    res.send(req.body);
  });

  student.get("/student", (req, res) => {
    collage.find({ name: "urvish" }, function (err, data) {
      res.send(data);
    });
  });

  student.delete("/student/:id", (req, res) => {
    collage.remove({ _id: req.params.id }, (err, data) => {
      if (err) throw err;
      if (data) {
        res.send("deleted data");
      }
    });
  });

  return student;
};
