const mongoose = require('mongoose')

const mongoURL = 'mongodb://127.0.0.1:27017/mydbs'

mongoose.connect(mongoURL, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('connected', () => {
    console.log('mongoDB server connected')
})
db.on('error', (error) => {
    console.log('mongoDB server connection error', error)
})
db.on('disconnected', () => {
    console.log('mongoDB server disconnected')
})
module.exports = db