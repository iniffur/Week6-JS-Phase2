const Weather = require('./weather');

describe('Weather', () =>{
    it('gets weather data', () => {
        const mockedAPI = {
            fetchWeatherData: (city, callback) => {
                callback({
                    city: 'FakeCity',
                    temperature: "20"
                })
            }

        }

        const weather = new Weather(mockedAPI);

        weather.fetch('FakeCity');

        expect(weather.getWeatherData()).toEqual({
            city: 'FakeCity',
            temperature: "20"
        })
    })
})

// Print to the console the values in main.temp 
// and weather[0].main (the values you have will probably be different, 
// unless you have the same cloudy weather!)

// callback({
//   name: 'sinatra/sinatra',
//   description: 'Some fake description'
// });