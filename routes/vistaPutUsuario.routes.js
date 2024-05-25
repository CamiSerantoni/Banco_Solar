import express from 'express';
import { putUsuario } from '../controllers/usuariosHandler.js';

const router = express.Router();

router.put('/', putUsuario )

export default router;