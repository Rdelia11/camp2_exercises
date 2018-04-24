const PG = require("pg");

function getProducts(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM products",
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

module.exports = getProducts;
