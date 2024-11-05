const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const DBConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('db connect')
    })
    .catch((error) => {
        console.log(error)
    })
}



module.exports = DBConnection

