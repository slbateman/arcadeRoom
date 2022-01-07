import mongoose from "mongoose";
import Users from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postUser = async (req, res) => {
  const user = req.body;
  const newUser = new Users({
    ...user,
    createdAt: new Date().toISOString,
  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

//need to figure out how to update only the desired key/value pair
export const patchUser = async (req, res) => {
  const { id } = req.params;
  const { email, avatar, bio } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);
  const updatedUser = { avatar, bio, email };
  await Users.findByIdAndUpdate(id, updatedUser, { new: true });
  res.json(updatedUser)
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`)
    await Users.findByIdAndRemove(id);
    res.json({message: "user deleted successfully"})
}