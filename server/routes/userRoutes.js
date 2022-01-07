import express from "express";
import { getUsers, postUser, patchUser, deleteUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", postUser);
router.patch("/:id", patchUser);
router.delete("/:id", deleteUser);

export default router;
