const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=80b28a754cf20bfaca953b5291a121d2&query=45,-75&units=f'

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()