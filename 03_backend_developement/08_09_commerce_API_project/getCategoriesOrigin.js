const request = require("request");
const insertCategories = require("./insertCategories");

function getAllCategories(callback) {
  const url = "https://decath-product-api.herokuapp.com";
  request(
    {
      url:  `${url}/categories`,
      method: "GET",
    },

    function(error, response, result) {
      if (error || (response && response.statusCode !== 200)) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      } else {
        const allCategories = JSON.parse(result);
        callback(allCategories);
      }
    }
  );
}

function displayCategories(categories) {
  categories.forEach(element => {
    console.log(element);
  });
}
getAllCategories(insertCategories);

// Correction :
// const request = require("request");
// const PG = require("pg");
//
// const client = new PG.Client();
// client.connect();
//
// let counter = 0;
//
// function getBrands() {
//   request({
//     url: "https://decath-product-api.herokuapp.com/brands"
//   }, function(error, response, body) {
//     if (error) {
//       console.warn(error);
//       return;
//     }
//     const brands = JSON.parse(body);
//
//     brands.forEach(function(brand) {
//       insertBrand(brand, brands.length);
//     });
//   });
// }
//
//
// function insertBrand(brand, total) {
//   client.query(
//     "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::varchar);",
//     [brand.id, brand.title],
//     function(error, result) {
//       if (error) {
//         console.warn(error);
//         return;
//       }
//       counter++;
//       if (counter >= total) {
//         client.end();
//       }
//     }
//   );
// }
//
// getBrands();
