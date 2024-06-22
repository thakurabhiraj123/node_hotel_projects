const mongoose = require("mongoose");
const mogoose = require("mongoose");
const mogooseUrl = "mongodb://localhost:27017/mydatabse";
mogoose.connect(mogooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Server is connected ");
});
db.on("error", (err) => {
  console.log("error is occured in server:", err);
});
db.on("disconnectd", () => {
  console.log("server is disconnected");
});
module.exports = db;
