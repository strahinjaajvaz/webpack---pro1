const path = require("path");
// node.js module
// https://nodejs.org/api/path.html

const config = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};

module.exports = config;
