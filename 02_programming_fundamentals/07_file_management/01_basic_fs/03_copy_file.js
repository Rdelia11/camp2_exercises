// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require ("fs");

function copyPaste (sourceFilename, targetFilename) {
  fe.readFile(sourceFilename, (error, data) => {
    if (error) {
      console.warm(error);
      return;
    }
    fs.writeFile(targetFilename, data, error => {
      if (error) {
        console.warn(error);
        return;
      }
    });
  });
}
copyPaste(t)
module.exports = copyPaste;
