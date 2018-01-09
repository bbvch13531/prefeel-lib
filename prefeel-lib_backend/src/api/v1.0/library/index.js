import express from 'express';
import * as ctrl from './library.ctrl.js';

const router = express.Router();

router.get('/', ctrl.getLibraries);
router.get('/:library-name', ctrl.getSelectedLibrary);
router.get('/test2', ctrl.getFolders);

export default router;