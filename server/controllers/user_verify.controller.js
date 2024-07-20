const jwt = require("jsonwebtoken")
const SECRET_KEY = "12345"

const verify_user = async  (req, res, next) => {
    const authorization = req.get("Authorization")
    
    if(!authorization) return res.status(400).send({ERR: "No sesion"})

    const token = authorization.split(" ")[1]
    
    try {
        const verify_token = await jwt.verify(token, SECRET_KEY)
        req.user = {
            user: verify_token,
            token
        }
        console.log(verify_token)
    } catch (error) {
        res.status(404).send({ERR:"Error de verificacion"})
    }
}