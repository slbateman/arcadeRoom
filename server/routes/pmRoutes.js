import express from "express";
import {
  getPMs,
  postPM,
  patchPM,
  deletePM,
} from "../controllers/pmControllers.js";

const router = express.Router()

router.get('/', getPMs)
router.post('/', postPM)
router.patch('/:id', patchPM)
router.delete('/:id', deletePM)

export default router
