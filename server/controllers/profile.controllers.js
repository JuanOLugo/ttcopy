const USER_MODEL = require("../DB/session.model")
const VIDEOS_MODEL = require("../DB/videos.model")

const getVideo = async (req, res) => {
    const {user_id} = req.user

    const verify_user = await USER_MODEL.findById(user_id)

    if(verify_user){
        if(verify_user.USER_VIDEOS.length != 0 ){
            const filter_videos = await VIDEOS_MODEL.find({USER_OWNER: verify_user.id })
            res.status(200).send({videos: filter_videos})
        }
    }

}

module.exports = {getVideo}