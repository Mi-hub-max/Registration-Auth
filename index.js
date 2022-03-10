const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
app = express();
app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.route"));

async function startyem() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/");
    app.listen(5000, () => console.log("Start port 5000"));
    console.log("вроде как есть локалка");
  } catch (e) {
    console.log("Я накрылся ", e.message);
    express.exit(1);
  }
}
startyem();
