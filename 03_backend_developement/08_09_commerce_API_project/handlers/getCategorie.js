const PG = require("pg");

function getCategorie(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM categories WHERE id=$1::uuid",
    [request.params.monid],
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

module.exports = getCategorie;
