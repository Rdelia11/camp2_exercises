const PG = require("pg");

function insertUneCategorie(categories, currentIndex) {

  const client = new PG.Client();

  client.connect();

  client.query(
    "insert into categories (id, decathlon_id, label) values ($1::uuid, $2::integer, $3::text)",
    [categories[currentIndex].id, categories[currentIndex].decathlon_id, categories[currentIndex].label],

    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        currentIndex = currentIndex + 1;
        if (currentIndex < categories.length) {
          insertUneCategorie(categories, currentIndex);
        } else {
          console.log("OK : ", currentIndex, " lines");
        }
        console.log(result);
      }
      client.end();
    }
  );
}

function insertCategories(categories) {
  console.log(categories.length);
  const currentIndex = 0;
  insertUneCategorie(categories, currentIndex);
}

module.exports = insertCategories;
