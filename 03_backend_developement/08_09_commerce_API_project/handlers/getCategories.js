const PG = require("pg");

function getCategories(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM categories",
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

module.exports = getCategories;
