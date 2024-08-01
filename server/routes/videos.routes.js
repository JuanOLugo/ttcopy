const {Router} = require("express")
const verify_access = require("../controllers/user_verify.controller")
const video_controller = require("../controllers/video.controllers")
const videor = Router()



videor.post("/getuservideo",  video_controller.getUserVideo  )
videor.post("/addanddeletefollow",  video_controller.addanddeletefollow  )


module.exports = videor