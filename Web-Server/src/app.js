const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// index.hbs
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Copper Jacob'
  })
})

// about.hbs
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Copper Jacob'
  })
})

// help.hbs
app.get('/help', (req, res) => {
  res.render('help', {
    msg: 'This is some helpful text.',
    title: 'Help',
    name: 'Copper Jacob'
  })
})

// app.com/weather
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is 50 degrees',
    location: 'Philadelphia'
  })
})

// 404 Missing Articles
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Copper Jacob',
    msg: 'Help article not found'
  })
})

// 404 Error Page
app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Copper Jacob',
    msg: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})