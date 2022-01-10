import express from "express";
import {
  getChatrooms,
  postChatroom,
  patchChatroom,
  deleteChatroom,
} from "../controllers/chatroomControllers.js";

const router = express.Router()

router.get('/', getChatrooms)
router.post('/', postChatroom)
router.patch('/:id', patchChatroom)
router.delete('/:id', deleteChatroom)

export default router
