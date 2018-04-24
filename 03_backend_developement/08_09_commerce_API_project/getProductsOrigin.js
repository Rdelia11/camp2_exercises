const request = require("request");
const insertProducts = require("./insertProducts");

function getAllProducts(callback) {
  const url = "https://decath-product-api.herokuapp.com";
  request(
    {
      url:  `${url}/products`,
      method: "GET",
    },

    function(error, response, result) {
      if (error || (response && response.statusCode !== 200)) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      } else {
        const allProducts = JSON.parse(result);
        callback(allProducts);
      }
    }
  );
}

function displayProducts(products) {
  products.forEach(element => {
    console.log(element);
  });
}

getAllProducts(insertProducts);
