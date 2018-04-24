const getCategories = require("./handlers/getCategories");
const getCategorie = require("./handlers/getCategorie");
const getProducts = require("./handlers/getProducts");
const getProduct = require("./handlers/getProduct");
const getBrands = require("./handlers/getBrands");
const getBrand = require("./handlers/getBrand");
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/categories/:monid", getCategorie);
app.get("/categories", getCategories);

app.get("/products/:monid", getProduct);
app.get("/products", getProducts);

app.get("/brands/:monid", getBrand);
app.get("/brands", getBrands);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
// app.listen(port, function () {
//   console.log("Server listening on port:" + port);
// });



// const express = require("express");
// const app = express();

// const port = process.env.PORT || 3000;
