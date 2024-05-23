import express from 'express';
import { deleteUsuario } from '../controllers/usuariosHandler.js';

const router = express.Router();

router.delete('/', deleteUsuario )

export default router;