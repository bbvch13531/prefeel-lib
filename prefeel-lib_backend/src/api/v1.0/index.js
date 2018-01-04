import express from 'express';
import auth from './auth';
import library from './library';

const router = express.Router();

router.use('/auth', auth);
router.use('/library', library);

export default router;