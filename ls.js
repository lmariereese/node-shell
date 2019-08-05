const fs = require("fs");

const ls = cmd => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      files.forEach((el, idx) => {
        let string = el + "\n";
        process.stdout.write(string);
        if (idx === files.length - 1) {
          process.stdout.write("prompt > ");
        }
      });
    }
  });
};

module.exports.ls = ls;
