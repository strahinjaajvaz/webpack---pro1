const path = require("path");
// node.js module
// https://nodejs.org/api/path.html

// resolve will take in the path to a file and make sure the file is correctly specified
// also, no matter what os is used, it will generate the correct path

// output file has to be in the public directory

/*
  webpack 2 - loaders are refered to as modules and the rules are the syntax
  rules - the loaders you want to have on your project
    - 
*/

const config = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  }
};

module.exports = config;
