const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    index: "./scripts/index.js",
    addMovies: "./scripts/indexAddMovies.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
  plugins: [new Dotenv({ systemvars: true })],
};
