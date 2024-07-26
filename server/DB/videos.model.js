const {Schema, model} = require("mongoose")

const videosSchema = new Schema({
    VIDEO_NAME: String,
    VIDEO_PATH: String,
    VIDEO_DATE: String,
    USER_OWNER: {
       type: Schema.Types.ObjectId,
       ref: "USER_MODEL"
    }
})

const VIDEO_MODEL = model("VIDEO_MODEL", videosSchema)

module.exports = VIDEO_MODEL