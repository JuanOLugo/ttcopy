const path = require("path");
const USER_MODEL = require("../DB/session.model");
const VIDEO_MODEL = require("../DB/videos.model");


const uploadVideo = async (req, res) => {
  const { file } = req.files;
  const { user_id } = req.user;
  const { description } = req.body;
  if (!file) return res.status(404).send({ ERR: "Error al subir el archivo" });
  const video_name = `${+new Date()}-${file.name}`;

  const path_save = path.join(
    "C:/Programing/ttcopy/ttcopy/server/videos/" + video_name
  );


  //Guardado de video

  file.mv(path_save, (err) => {
    if (err) {
        return res.status(200).send({ERR: "ERROR"})
    }
  });

  const find_user = await USER_MODEL.findById(user_id);

  const new_video = new VIDEO_MODEL({
    USER_OWNER: find_user.id,
    VIDEO_DATE: new Date(),
    VIDEO_NAME: description,
    VIDEO_PATH: "/videos/" + video_name,
  
  });

  const save_video = await new_video.save();

  find_user.USER_VIDEOS.push(save_video.id);

  await find_user.save();

  res.status(200).send({msg: "Video subido correctamente"})
};

module.exports = { uploadVideo };
