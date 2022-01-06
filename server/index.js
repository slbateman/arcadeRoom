import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js"

const app = express();
const PORT = 5000;
const CONNECTION = "mongodb://localhost/chatroomDB";

//connect to mongodb
mongoose.connect(CONNECTION, (err) => {
  if (err) throw err;
  console.log("connected to chatroomDB");
});

//middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//router
app.use('/api', router)

//start server
app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})
