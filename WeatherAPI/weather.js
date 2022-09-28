const WeatherAPI = require('./weatherAPI')

class Weather{
    constructor(API){
        this.API = API;
        this.result
    }

    fetch(city){
        this.API.fetchWeatherData(city, (response) => {
            this.result = response
        })
    }

    getWeatherData(){
        return this.result;
    }
}

module.exports = Weather;
