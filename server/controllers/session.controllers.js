const brcrypt = require("bcrypt")
const USER_MODEL = require("../DB/session.model")
const jwt = require("jsonwebtoken")

const SECRECT_KEY = "12345"

const createUser = async (req, res) => {
    const {username, password} = req.body

    const verify_user_exist = await USER_MODEL.findOne({username: username})

    if(verify_user_exist) return res.status(404).send({ERR: "Este usuario ya existe"})
    
    const passhash = await brcrypt.hash(password, 10)

    const new_user = new USER_MODEL({
        username,
        password: passhash
    })

    

    const user_add = await new_user.save()

    const createToken = jwt.sign({id: user_add.id}, SECRECT_KEY)

    res.status(200).send({user: user_add, token: createToken})

}

module.exports = {createUser}