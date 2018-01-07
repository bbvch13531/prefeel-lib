import express from 'express';
import * as ctrl from './project.ctrl.js';

const router = express.Router();

router.get('/:project_name', ctrl.getSelectedProject);

export default router;