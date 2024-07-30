const express = require("express");
const cors = require("cors");
const path = require("path")
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/session/", require("./routes/session.routes"));
app.use("/api/upload/", require("./routes/upload.routes"));
app.use("/api/profile", require("./routes/profile.routes"))
app.use("/videos", express.static(path.join(__dirname, 'videos')))
app.use("/miniaturas", express.static(path.join(__dirname, 'thumbnail')))


const port = 3456;
app.listen(port, () => {
  console.log("server on port ", port);
  require("./DB/db.connection")();
});
