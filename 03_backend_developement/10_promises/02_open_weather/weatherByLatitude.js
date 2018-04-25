
const fetch = require("node-fetch");

function weatherByLatitudeAndLongitude(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6512f520642c646e2e5627ae803600c1`,
    {method: "GET"})

    .then((response) => response.json())
    .then((result) => console.log(result.name, ":", result.main.temp));
}
weatherByLatitudeAndLongitude(32.661343, 51.680374);
