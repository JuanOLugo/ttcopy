const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/session/", require("./routes/session.routes"));

const port = 3456;
app.listen(port, () => {
  console.log("server on port ", port);
  require("./DB/db.connection")();
});
