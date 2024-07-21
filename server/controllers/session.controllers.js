const bcrypt = require("bcrypt")
const USER_MODEL = require("../DB/session.model")
const jwt = require("jsonwebtoken")

const SECRECT_KEY = "12345"

const createUser = async (req, res) => {
    const {username, password} = req.body

    const verify_user_exist = await USER_MODEL.findOne({username: username})

    if(verify_user_exist) return res.status(404).send({ERR: "Este usuario ya existe"})
    
    const passhash = await bcrypt.hash(password, 10)

    const new_user = new USER_MODEL({
        username,
        password: passhash
    })

    

    const user_add = await new_user.save()

    const createToken = jwt.sign({id: user_add.id}, SECRECT_KEY)

    res.status(200).send({user: user_add, token: createToken})

}

const login = async (req, res) => {
    const {username, password} = req.body
    
    if(!username || !password) return res.status(402).send({ERR: "Faltan credenciales"})
    
    const find_user = await USER_MODEL.findOne({username: username})

    if(!find_user) return res.status(402).send({ERR: "Credenciales incorrectas"})
    
    const verify_password = await bcrypt.compare(password, find_user.password)

    if(verify_password) {
        const token = await jwt.sign({id: find_user.id}, SECRECT_KEY)
        res.status(200).send({user: find_user, token})
    }
    else return res.status(402).send({ERR: "Credenciales incorrectas"})

}

const getaccess = async (req, res) => {
    const {user_id} = req.user
    const find_user = await USER_MODEL.findById(user_id)
    if(!find_user) res.status(404)

    res.status(200).send({user: find_user})
}

module.exports = {createUser, getaccess, login}