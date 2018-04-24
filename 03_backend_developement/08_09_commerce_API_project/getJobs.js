const PG = require("pg");
const client = new PG.Client();

client.connect();

client.query(
  "SELECT * FROM job WHERE id = $1::integer",
  ["2"],
  function(error, result) {
    if (error) {
      console.warn(error);
    } else {
      console.log(result);
    }
    client.end();
  }
);
