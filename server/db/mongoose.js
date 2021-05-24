const mongoose = require("mongoose");
const db = require("../config/db");

mongoose
  .connect(
    `mongodb+srv://${db.USER}:${db.PSWD}@${db.CLUSTER}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(`connection error ${error}`);
  });

module.exports = mongoose;
