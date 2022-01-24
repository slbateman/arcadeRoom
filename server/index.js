import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import router from "./routes/router.js";

//for heroku
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// for heroku
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.dirname(__dirname, "../src/build")));

//hiroku port
const serverPORT = process.env.PORT || 5000;
const CONNECTION =
  "mongodb+srv://general:2Gikim2289WpHGXS@cluster0.9y20k.mongodb.net/arcadeRoomDB?retryWrites=true&w=majority";
const httpServer = createServer(app);

//connect to mongodb
mongoose.connect(CONNECTION, (err) => {
  if (err) throw err;
  console.log("connected to chatroomDB");
});

//middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//router
app.use("/api", router);

//socket
io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on("userConnection", (userData) => {
    io.emit("userConnection", userData);
  });

  socket.on("sendChatroomMessage", (messageData) => {
    socket.broadcast.emit("sendChatroomMessage", messageData);
  });

  socket.on("updateUserColor", (colorData) => {
    socket.broadcast.emit("updateUserColor", colorData);
  });

  socket.on("updateUserAvatar", (avatarData) => {
    socket.broadcast.emit("updateUserAvatar", avatarData);
  });

  socket.on("updateUserBio", (bioData) => {
    socket.broadcast.emit("updateUserBio", bioData);
  });

  socket.on("sendPMMessage", (messageData) => {
    socket.broadcast.emit("sendPMMessage", messageData);
  });

  socket.on("newPM", () => {
    socket.broadcast.emit("newPM");
  });

  socket.once("disconnect", (reason) => {
    console.log(`${socket.id} disconnected due to ${reason}`);
    io.emit("userDisconnected", socket.id);
  });
});

//start server
httpServer.listen(serverPORT, () => {
  console.log(`server running on port ${serverPORT}`);
});
