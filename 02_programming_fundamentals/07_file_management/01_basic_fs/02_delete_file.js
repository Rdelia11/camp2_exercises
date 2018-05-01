// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const path = require("path");
const fs = require ("fs");
const pathTest = "/Users/Remi/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/TOTO/toto"


function deleteFile (path) {
  fs.unlink(path, error => {
    if (error) {
      console.warn(error);
      return;
    }
    console.log("congrats file is delete");
 });
}
deleteFile(pathTest);
