const path = require("path");
// node.js module
// https://nodejs.org/api/path.html

// resolve will take in the path to a file and make sure the file is correctly specified
// also, no matter what os is used, it will generate the correct path

// output file has to be in the public directory

const config = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};

module.exports = config;
