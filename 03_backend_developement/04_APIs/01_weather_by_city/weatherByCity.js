const request = require("request");

function weatherByCityName(cityName) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c7627b7a410d563fa67a9772903da9`,
      method: "GET",
    },
    function(error, response, result) {
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}
weatherByCityName("Lille");
