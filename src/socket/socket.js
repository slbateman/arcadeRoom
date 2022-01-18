import io from "socket.io-client";
import { updateUser } from "../api/userAPI";

const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);
const localUserInfo = JSON.parse(localStorage.getItem("localUserInfo"))

socket.on("connect", () => {
  console.log("connected");
  const userData = {
    _id: localUserInfo.user_id,
    socket_id: socket.id,
    active: true,
  };
  socket.emit("userConnection", userData);
  updateUser(userData._id, {
    active: userData.active,
    socket_id: userData.socket_id,
  });
});

export default socket;
