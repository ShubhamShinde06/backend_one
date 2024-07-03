require('dotenv').config()
const express = require('express') //express import
const app = express() // express in app store
const port = 4000 // virtual port you can change this port

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api',(req,res) =>  {
    res.send("bhuijn")
})

app.get('/login',(req,res) => {
  res.send('<h1>please login at this</h1>')
})

app.get('/dev',(req,res) => {
  res.send('<h2>shubham dev</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})