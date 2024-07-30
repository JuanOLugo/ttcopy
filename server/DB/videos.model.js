const {Schema, model} = require("mongoose")

const videosSchema = new Schema({
    VIDEO_NAME: String,
    VIDEO_PATH: String,
    VIDEO_DATE: String,
    USER_OWNER: {
       type: Schema.Types.ObjectId,
       ref: "USER_MODEL"
    },
})

videosSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})


const VIDEO_MODEL = model("VIDEO_MODEL", videosSchema)

module.exports = VIDEO_MODEL