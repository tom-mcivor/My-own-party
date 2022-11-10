const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

//create serverside api to grab images?
server.get('/api/v1/images', (req, res) => {
  request
    .get('images')
    .then((res) => {})
    .catch((err) => {
      console.log(err)
      res.send('err')
    })
})
module.exports = server
