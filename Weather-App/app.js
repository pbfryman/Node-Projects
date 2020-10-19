const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(42.3605, -71.0596, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})



// Geocoding (Forward Geocoding)
// Address -> Lat/Long -> Weather
geocode('Boston', (error, data) => {
  console.log(chalk.red.bold('Error', error))
  console.log('Data', data)
})