const fs = require("fs");

fs.readFile("anime.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("3.js :: read file :: error  ", err);
    return;
  }
  data = data + "luffy luffy luffy luffy lufyy";
  fs.writeFile("anime.txt", "utf-8", (err) => {
    if (err) {
      console.log("3.js :: write file :: error", err);
      return;
    }
  });
  console.log("3.js :: write file :: data",data);
});
