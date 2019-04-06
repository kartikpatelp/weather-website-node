const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log(latitude, longitude);
    const url = 'https://api.darksky.net/forecast/f76ae91d9d7aeef98c4e6f369f0e159a/'+ latitude +','+longitude;

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback("Unable to connect to weather services!", undefined)
        }else if (body.error) {
            callback("Unable to find location", undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. Highest Temprature: '+body.daily.data[0].temperatureHigh+' Lowest Temprature: '+body.daily.data[0].temperatureLow)    
        }
    })
}

module.exports = forecast