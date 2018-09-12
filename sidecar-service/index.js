const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello from sidecar-service!')
})

app.listen(8081, () => console.log('sidecar-service listening on port 8081!'))