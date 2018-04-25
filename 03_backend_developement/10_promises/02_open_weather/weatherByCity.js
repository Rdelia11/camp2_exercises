const fetch = require("node-fetch");

function weatherByCityName(cityName) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c7627b7a410d563fa67a9772903da9`,
    {method: "GET"})

    .then((response) => response.json())
    .then((result) => {
      console.log(result.name, ":",result.main.temp);
    });
}

weatherByCityName("Lille");
