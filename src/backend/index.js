const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  res.send(config);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

// Storing the JSON format data in myObject
var data = fs.readFileSync("enNews.json");
var myObject = JSON.parse(data);

// Defining new data to be added
let newData = {
  id: 4,
  title: "tavmamm",
  text: "husbhgdfkhsdjbg",
  date: "hsdbf",
};

// Adding the new data to our object
myObject.push(newData);

// Writing to our JSON file
var newData2 = JSON.stringify(myObject);
fs.writeFile("enNews.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});
