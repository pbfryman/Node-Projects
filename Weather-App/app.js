const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
  console.log(chalk.red.bold('Please provide an address.'))
} else {
// Geocoding (Forward Geocoding)
// Address -> Lat/Long -> Weather
geocode(address, (error, {lat, long, location} = {}) => {
  if (error) {
    return console.log(chalk.red.bold(error))
  }

  // Geocoding (Forward Geocoding)
  // Address -> Lat/Long -> Weather
  forecast(lat, long, (error, forecastData) => {
    if (error) {
      return console.log(chalk.red.bold(error))
    }

    console.log(location)
    console.log(forecastData)
  })
})
}

