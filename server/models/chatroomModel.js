import mongoose from "mongoose";

const chatroomSchema = mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true},
  description: { type: String, default: "" },
  color: {type: String, default: "#ffffff"},
  messages: {
    user_id: { type: String },
    message: { type: String },
  },
});

const Chatrooms = mongoose.model("chatroom", chatroomSchema)

export default Chatrooms