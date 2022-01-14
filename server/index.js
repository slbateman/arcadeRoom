import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import router from "./routes/router.js"

const app = express();
const PORT = 5000;
const CONNECTION = "mongodb+srv://generic:uHMedEbE4s4Qvit@cluster0.dfhml.mongodb.net/chatroomDB?retryWrites=true&w=majority";

//connect to mongodb
mongoose.connect(CONNECTION, (err) => {
  if (err) throw err;
  console.log("connected to chatroomDB");
});

//middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//router
app.use('/api', router)

//start server
app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})
