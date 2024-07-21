const {Router} = require("express")
const session_controllers = require("../controllers/session.controllers")
const verify_access = require("../controllers/user_verify.controller")
const sessionr = Router()

sessionr.post("/createuser", session_controllers.createUser)
sessionr.post("/login", session_controllers.login)
sessionr.post("/getaccess", verify_access, session_controllers.getaccess)

module.exports = sessionr