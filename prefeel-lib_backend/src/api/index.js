import express from 'express';
import v1_0 from './v1.0';

const versions = {
  '1.0': v1_0
};

const router = express.Router();

router.use('/v1.0', versions['1.0']);

export default router;