const mongoose = require("mongoose")

const mongo_URI = "mongodb://127.0.0.1:27017/ttfake"

const main = () => {
    try {
        mongoose.connect(mongo_URI)
        console.log("Base de datos esta UP")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main