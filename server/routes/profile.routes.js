const {Router} = require("express")
const verify_access = require("../controllers/user_verify.controller")
const profiler = Router()
const profile_controller = require("../controllers/profile.controllers")


profiler.post("/getvideos", verify_access, profile_controller.getVideo )


module.exports = profiler