import { Router } from 'express'
import { suma } from '../controllers/test.controller'

const router = Router();

router.route('/test-sum')
    .post(suma);



export default router;