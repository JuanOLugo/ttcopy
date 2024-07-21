const {Schema, model} = require("mongoose")

const USER_SCHEMA = new Schema({
    username: String,
    password: {
        type: String,
    },
    USER_VIDEOS: [],
    USER_COMMENTS: [],
    ACCOUNTS_FOLLOW: [],
    ACCOUNTS_FOLLOWERS: []
})

USER_SCHEMA.set("toJSON", {
    transform: (doc, ret, options) => {
        delete ret.password
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const USER_MODEL = model("USER_MODEL", USER_SCHEMA)

module.exports = USER_MODEL