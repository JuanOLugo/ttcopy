const {Router} = require("express")
const session_controllers = require("../controllers/session.controllers")
const sessionr = Router()

sessionr.post("/createuser", session_controllers.createUser)
sessionr.post("/loginwithtoken", session_controllers.createUser)

module.exports = sessionr