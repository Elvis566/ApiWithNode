import express from 'express';
import { createComentario } from '../controller/ComentarioController.js';

const router = express.Router();
router.post('/comentario', createComentario);

export const RouterComentario = router;