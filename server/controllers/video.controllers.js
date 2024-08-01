const VIDEO_MODEL = require("../DB/videos.model")
const USER_MODEL = require("../DB/session.model")
const getUserVideo = async (req, res) => {
    const {user, videoid} = req.body

    const find_video = await VIDEO_MODEL.findById(videoid).populate("USER_OWNER", {username: 1})

    if(find_video) return res.status(200).send({video:find_video})
    res.status(400).send({ERR: "Video no existe"})
    
}


const addanddeletefollow = async (req, res) => {
    const {userFollowed, user, action} = req.body

    if(action === "add"){
        const userFollowedFind = await USER_MODEL.findById(userFollowed) 
        const userFind = await USER_MODEL.findById(user)

        //Añadir el follow al usuario que queremos seguir
        userFollowedFind.ACCOUNTS_FOLLOWERS.push(userFind.id)
        userFind.ACCOUNTS_FOLLOW.push(userFollowedFind.id)

        const UserFindSave = await userFind.save()
        await userFollowedFind.save()

        res.status(200).send({ACCOUNTS_FOLLOW: UserFindSave.ACCOUNTS_FOLLOW})

    }
    if(action === "unfollow"){
        const userFollowedFind = await USER_MODEL.findById(userFollowed) 
        const userFind = await USER_MODEL.findById(user)

        //Añadir el follow al usuario que queremos seguir
        userFollowedFind.ACCOUNTS_FOLLOWERS = userFollowedFind.ACCOUNTS_FOLLOWERS.filter(e => {
            return e !== userFind.id
        })
        userFind.ACCOUNTS_FOLLOW = userFind.ACCOUNTS_FOLLOWERS.filter(e => {
            return e !== userFollowedFind.id
        })

        const UserFindSave = await userFind.save()
        await userFollowedFind.save()

        res.status(200).send({ACCOUNTS_FOLLOW: UserFindSave.ACCOUNTS_FOLLOW})
    }
    
    
}


module.exports = {getUserVideo, addanddeletefollow}