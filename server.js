const express = require("express");
const app = express();

const config = require("./config");
const db = require("./config/database.js");
//router imports
const userRouter = require("./routes/user/");
//cors middleware
const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

//middleware
app.use(cors);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/users", userRouter);

app.listen(config.port, () =>
  console.log(
    `Server started on port ${config.port}. At ${new Date(Date.now())}`
  )
);
