import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);

socket.on("connect", () => console.log("connected"));

// socket.on("greeting", greeting => console.log(greeting))

// socket.on("serverMessage", (data, id) => {
//   //dispatch(messageReducer(data))
//   console.log(`from ${id}: ${data}`)
// })

// socket.on("PM", data => {
//   //dispatch(messageReducer(data))
//   console.log(`from server: ${data}`)
// })

// socket.on("userLeft", (exit) => {
//   console.log(exit);

// });

export default socket;
