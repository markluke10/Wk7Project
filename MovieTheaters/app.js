const {buildDB} = require('./db/createDataBase')
const express = require('express')
const {movieRt, userRt} = require('./routers')
const app = express()

buildDB()

app.use(express.json())
app.use('/movie', movieRt)
app.use('/user', userRt)





app.listen(3000, ()=>{
    console.log('The server is live and listening at http://localhost:3000')
})