const apiKey = require('./apiKey');
const got = require('got');// include our key

class WeatherAPI{

    constructor(){
        this.url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=`
    }

    fetchWeatherData(city, callback){
        got(this.url + city + apiKey).then((response) => {
            const result = JSON.parse(response.body)
            return result;
        }).then(callback);
    }
}

module.exports = WeatherAPI;