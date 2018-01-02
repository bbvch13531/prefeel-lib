import express from 'express';
import * as ctrl from './auth.ctrl.js';

const router = express.Router();

router.get('/getEx', ctrl.getEx);
router.post('/postEx', ctrl.postEx);
router.delete('/deleteEx', ctrl.deleteEx);

export default router;