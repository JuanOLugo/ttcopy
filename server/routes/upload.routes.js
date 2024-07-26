const {Router} = require("express")
const verify_access = require("../controllers/user_verify.controller")
const up_controllers = require("../controllers/upload.controllers")
const upload = require("express-fileupload")
const uploadr = Router()


uploadr.post("/video", verify_access, upload(), up_controllers.uploadVideo )


module.exports = uploadr