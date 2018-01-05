import express from 'express';
import * as ctrl from './library.ctrl.js';

const router = express.Router();

router.get('/', ctrl.getLibraries);
router.get('/:library_name', ctrl.getSelectedLibrary);

export default router;