const express = require('express')
const request = require('request')
const app = express()

app.get('/', (req, res) => {
  let startTime = new Date()
  request({ url: 'http://localhost:8081/hello', method: 'GET' }, (err1, res1, body1) => {
    let response1Time = new Date()
    request({ url: 'http://service1:8082/hello', method: 'GET'}, (err2, res2, body2) => {
      let response2Time = new Date()
      res.json({ response1: body1, response2: body2, startTime: startTime, response1Time: response1Time, response2Time: response2Time })
    })
  })
})

app.listen(8080, () => console.log('front-service listening on port 8080!'))