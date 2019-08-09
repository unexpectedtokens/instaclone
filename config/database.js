const mongoose = require("mongoose");
const config = require("./");

const db = mongoose
  .connect(config.mongo_uri, {
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to db"))
  .catch(e => console.log(e));

module.exports = db;
