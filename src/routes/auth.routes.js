import {Router} from 'express';
const router = Router()

import * as authCtrl from '../controllers/auth.controllers';

router.post('/singIn', authCtrl.signIn)

export default router;