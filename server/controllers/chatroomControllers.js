import mongoose from "mongoose";
import Chatrooms from "../models/chatroomModel.js";

export const getChatrooms = async (req, res) => {
  try {
    const chatrooms = await Chatrooms.find();
    res.status(200).json(chatrooms);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postChatroom = async (req, res) => {
  const chatroom = req.body;
  const newChatroom = new Chatrooms({
    ...chatroom,
    createdAt: new Date().toISOString,
  });
  try {
    await newChatroom.save();
    res.status(201).json(newChatroom);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const patchChatroom = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`no user with id: ${id}`);
  const updatedChatroom = req.body;
  await Chatrooms.findByIdAndUpdate(id, updatedChatroom, { new: true });
  res.json(updatedChatroom);
};

export const deleteChatroom = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`no user with id: ${id}`);
  await Chatrooms.findByIdAndDelete(id);
  res.json({ message: "chatroom deleted successfully" });
};
