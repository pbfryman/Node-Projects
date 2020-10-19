// API KEY: 80b28a754cf20bfaca953b5291a121d2
const request = require('request')
const chalk = require('chalk')

// const url = 'http://api.weatherstack.com/current?access_key=80b28a754cf20bfaca953b5291a121d2&query=37.8267,-122.4233&units=f'

// request({url: url, json: true}, (error, response) => {
//   if (error) {
//     console.log(chalk.red.bold('Unable to connect to weather service!'))
//   } else if (response.body.error) {
//     console.log(chalk.red.bold('Unable to find location!'))
//   } else {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + '% chance of rain.')
//   }
// })

// Geocoding (Forward Geocoding)
// Address -> Lat/Long -> Weather
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmxha2VmcnltYW4xNCIsImEiOiJja2dmdmU4ZjIwdm45MnFwZDN4ejAxbG0wIn0.aFwzKart03AY2u01ZD04-w&limit=1'

request({url: url, json: true}, (error, response) => {
  if (error) {
    console.log(chalk.red.bold('Unable to connect to geoservice!'))
  } else if (response.body.features.length === 0) {
    console.log(chalk.red.bold('Unable to find location! Try another search.'))
  } else {
    const lat = response.body.features[0].center[0]
    const long = response.body.features[0].center[1]
    console.log(lat, long)
  }
})