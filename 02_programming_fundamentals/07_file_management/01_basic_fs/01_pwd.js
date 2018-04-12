const path = require("path");

function pwd() {
  console.log(path.resolver("."));
}
// Ou   console.log(__dirname);
}
pwd();

module.exports = pwd

/*
// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
*/
