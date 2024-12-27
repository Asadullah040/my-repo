const mongoose = require('mongoose')
const db = require('./db')
const person = require('./model/person')

const express = require('express')

const app = express()
app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

app.listen(4000, () => {
    console.log('server is running in port 4000');

})