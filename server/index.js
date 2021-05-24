const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("./db/mongoose");

app.use(cors());
app.use(express.json());

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 1200;

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
