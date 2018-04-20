const request = require("request");

function weatherByLatitudeAndLongitude(lat, lon) {
  request(
    {
      url: ` http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=09c7627b7a410d563fa67a9772903da9 `,

      method: "GET",
    },
    function(error, response, result) {
      const DoneGPS = JSON.parse(result);
      console.log(`${DoneGPS.main.temp}°C`);
    }
  );
}

weatherByLatitudeAndLongitude(32.661343, 51.680374);

function weatherByZipcode(zipCode, countryCode){
  request(
    {
      url: ` http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=metric&APPID=09c7627b7a410d563fa67a9772903da9`,
      method: "GET",
    },
    function(error, response, result) {
      const GPS = JSON.parse(result);
      console.log(`${GPS.main.temp}°C`);
    }
  );
}

weatherByZipcode(59000, "fr");

module.exports = {
  weatherByLatitudeAndLongitude,
  weatherByZipcode,
};
