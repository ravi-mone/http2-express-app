const port = 5000;
const spdy = require('spdy')
const express = require('express')
const path = require('path')
const fs = require('fs')
const proxy = require('http-proxy-middleware');

const app = express()

app.get('/express_backend', (req, res) => {
    res
      .status(200)
      .json({message: 'Hi, I am a Express API Response'})
})
const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert:  fs.readFileSync(__dirname + '/server.crt')
}

console.log(options)
spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port for http2: ' + port + '.')
    }
  })
