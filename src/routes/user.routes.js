import { Router } from 'express';
const router = Router();

import * as userCtrl from '../controllers/user.controllers';

router.get('/', userCtrl.getUser)

export default router;