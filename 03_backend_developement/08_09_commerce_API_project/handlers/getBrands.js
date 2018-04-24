const PG = require("pg");

function getBrands(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM brands",
    [],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
      } else {
        result.json(resultQuery.rows);
      }
      client.end();
    }
  );
}

module.exports = getBrands;
