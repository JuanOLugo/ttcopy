const {Router} = require("express")
const verify_access = require("../controllers/user_verify.controller")
const video_controller = require("../controllers/video.controllers")
const videor = Router()



videor.post("/getuservideo",  video_controller.getUserVideo  )


module.exports = videor