import mongoose from "mongoose";
import PMs from "../models/pmModel.js"

export const getPMs = async (req, res) => {
  try {
    const pms = await PMs.find();
    res.status(200).json(pms);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postPM = async (req, res) => {
  const pm = req.body;
  const newPM = new PMs({
    ...pm,
    createdAt: new Date().toISOString,
  });
  try {
    await newPM.save();
    res.status(201).json(newPM);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const patchPM = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`no user with id: ${id}`);
  const updatedPM = req.body;
  await PMs.findByIdAndUpdate(id, updatedPM, { new: true });
  res.json(updatedPM);
};

export const deletePM = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`no user with id: ${id}`);
  await PMs.findByIdAndDelete(id);
  res.json({ message: "pm deleted successfully" });
};
