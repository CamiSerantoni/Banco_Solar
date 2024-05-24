import express from 'express';
import { postTransferencia } from '../controllers/transferenciasHandler.js';

const router = express.Router();

router.post('/', postTransferencia)

export default router;