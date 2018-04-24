const PG = require("pg");

function insertUneBrand(brands, currentIndex) {

  const client = new PG.Client();

  client.connect();

  client.query(
    "insert into brands (id, title) values ($1::uuid, $2::text)",
    [brands[currentIndex].id, brands[currentIndex].title],

    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        currentIndex = currentIndex + 1;
        if (currentIndex < brands.length) {
          insertUneBrand(brands, currentIndex);
        } else {
          console.log("OK : ", currentIndex, " lines");
        }
        //console.log(result);
      }
      client.end();
    }
  );
}

//const uneBrand = { id: "0b68b564-56e2-4a74-94d0-96b676e129cc", title: "WEIDER" };

//insertBrand(uneBrand);

function insertBrands(brands) {
  const currentIndex = 0;
  insertUneBrand(brands, currentIndex);
}

module.exports = insertBrands;
