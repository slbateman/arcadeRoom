import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import router from "./routes/router.js";

const app = express();
const PORT = 5000;
const CONNECTION =
  "mongodb+srv://generic:uHMedEbE4s4Qvit@cluster0.dfhml.mongodb.net/chatroomDB?retryWrites=true&w=majority";
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
    socket.broadcast.emit("userConnection", userData)
  })

  socket.on("sendChatroomMessage", (messageData) => {
    socket.broadcast.emit("sendChatroomMessage", messageData)
  })

  socket.on("updateUserColor", (colorData) => {
    socket.broadcast.emit("updateUserColor", colorData)
  })
  
  socket.on("updateUserAvatar", (avatarData) => {
    socket.broadcast.emit("updateUserAvatar", avatarData)
  })

  socket.on("updateUserBio", (bioData) => {
    socket.broadcast.emit("updateUserBio", bioData)
  })

  // socket.emit("greeting", "Welcome")
  // io.emit("greeting", "look who showed up, everyone!")
  //   socket.broadcast.emit("greeting", "pretend you like them")

  //   socket.on("userJoin", (room) => {
  //     socket.join(room)
  //   });

  //send a message to everyone but the original sender
  //   socket.on("message", (data) => {
  //     //broadcast from the original sender socket
  //     socket.broadcast.emit("serverMessage", data, socket.id);

  //   });

  //   socket.on("usermessage", (room, data) => {
  //     socket.leave("public")
  //     socket.join(room);
  //     console.log(data);
  //     socket.to(room).emit("serverMessage", data, socket.id);
  //     io.to(socket.id).emit("PM", `message sent: ${data}`) //this is how you PM
  //   })

  // Here is where we handle the disconnect of a socket.
    socket.once("disconnect", (reason) => {
      console.log(`${socket.id} disconnected due to ${reason}`);
      io.emit("userDisconnected", socket.id, );
    });
});

//start server
httpServer.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});