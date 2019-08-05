const fs = require("fs");

const ls = cmd => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
    }
  });
  setTimeout(function() {
    process.stdout.write("\nprompt > ");
  }, 0);
};

module.exports.ls = ls;
