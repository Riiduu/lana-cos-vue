const express = require("express");
const app = express();
var config = require("./test.json");
app.get("/", function (req, res) {
  res.send(config);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
