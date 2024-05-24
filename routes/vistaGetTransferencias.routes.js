import express from 'express';
import { getTransferencias } from '../controllers/transferenciasHandler.js';

const router = express.Router();

router.get('/', getTransferencias )

export default router;