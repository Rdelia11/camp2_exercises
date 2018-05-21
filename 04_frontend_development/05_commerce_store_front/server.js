const express = require("express");
const nunjucks = require("nunjucks");
const fetch = require("node-fetch");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/", function(request, result) {
  return fetch(`https://decath-product-api.herokuapp.com/categories`)
  .then(response => response.json())
  .then(categories => {
    result.render("categories", {categories:categories});
  });
});

app.get("/categories/:categoryid/products", function(request, result) {

  return fetch(`https://decath-product-api.herokuapp.com/categories/${request.params.categoryid}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
    result.render("products",{products:products});

  });
});

const port = process.env.PORT || 3000;
app.listen(port,function(){
  console.log("server listening on the port"+ port);
});
