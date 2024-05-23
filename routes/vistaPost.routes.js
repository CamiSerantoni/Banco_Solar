import express from 'express';
import { postUsuario } from '../controllers/usuariosHandler.js';

const router = express.Router();

router.post('/', postUsuario)

export default router;