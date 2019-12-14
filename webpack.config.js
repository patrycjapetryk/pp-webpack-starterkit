const path = require("path");
const outputDir = path.resolve(__dirname, "dist/js");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: outputDir,
    filename: "main.js"
  }
};
