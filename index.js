const express = require('express')
const DBConnection = require('./connection/DbConnection')
const router = require('./routes/route')
const app = express()
const cors = require('cors');
require('dotenv').config()

const PORT = process.env.PORT
const Mode = process.env.Mode || "production"


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));



//db connection
DBConnection()



//routes
app.use('/', router)




app.listen(PORT,  () => {
    console.log(`running on ${PORT} on ${Mode}`)
})