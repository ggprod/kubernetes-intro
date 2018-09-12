const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello from back-service!')
})

app.listen(8080, () => console.log('back-service listening on port 8080!'))