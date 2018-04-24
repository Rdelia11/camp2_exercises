const request = require("request");
const insertBrands = require("./insertBrands");

function getAllBrands(callback) {
  const url = "https://decath-product-api.herokuapp.com";
  request(
    {
      url:  `${url}/brands`,
      method: "GET",
    },

    function(error, response, result) {
      if (error || (response && response.statusCode !== 200)) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      } else {
        const allBrands = JSON.parse(result);
        callback(allBrands);
      }
    }
  );
}

function displayBrands(brands) {
  brands.forEach(element => {
    console.log(element);
  });
}

getAllBrands(insertBrands);
