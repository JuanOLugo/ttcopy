const VIDEO_MODEL = require("../DB/videos.model")

const getUserVideo = async (req, res) => {
    const {user, videoid} = req.body

    const find_video = await VIDEO_MODEL.findById(videoid)

    if(find_video) return res.status(200).send({video:find_video})
    res.status(400).send({ERR: "Video no existe"})
    
}


module.exports = {getUserVideo}