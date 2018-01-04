import express from 'express';
import * as ctrl from './library.ctrl.js';

const router = express.Router();

router.get('/', ctrl.getLibraries);

export default router;