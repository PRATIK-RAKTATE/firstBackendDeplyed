require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h1>youtube</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// we can say this 15 line code to as server