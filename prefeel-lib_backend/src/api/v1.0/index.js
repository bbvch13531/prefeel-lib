import express from 'express';
import auth from './auth';
import library from './library';
import project from './project';

const router = express.Router();

router.use('/auth', auth);
router.use('/library', library);
router.use('/project', project);

export default router;