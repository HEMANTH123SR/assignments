const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("read file :: error :: ", err);
    return;
  }
  let filteredData = data
    .split(" ")
    .filter((val) => {
      return val.trim() !== "";
    })
    .join(" ");
  fs.writeFile("data.txt", filteredData, (err) => {
    if (err) {
      console.log("read file :: error :: ", err);
    }
  });
  console.log("read file :: data ", filteredData);
});
