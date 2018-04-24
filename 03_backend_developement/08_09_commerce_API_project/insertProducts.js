const PG = require("pg");

function insertUnProduct(products, currentIndex) {

  const client = new PG.Client();

  client.connect();

  client.query(
    "insert into products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) values ($1::uuid, $2::integer, $3::text, $4::text, $5::text, $6::float, $7::float, $8::float, $9::float, $10::text, $11::float)",
    [products[currentIndex].id, products[currentIndex].decathlon_id, products[currentIndex].title, products[currentIndex].description, products[currentIndex].brand_id, products[currentIndex].min_price, products[currentIndex].max_price, products[currentIndex].crossed_price, products[currentIndex].percent_reduction, products[currentIndex].image_path, products[currentIndex].rating],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        currentIndex = currentIndex + 1;
        if (currentIndex < products.length) {
          insertUnProduct(products, currentIndex);
        } else {
          console.log("OK : ", currentIndex, " lines");
        }
        console.log(result);
      }
      client.end();
    }
  );
}

function insertProducts(products) {
  console.log(products.length);
  const currentIndex = 0;
  insertUnProduct(products, currentIndex);
}

module.exports = insertProducts;
