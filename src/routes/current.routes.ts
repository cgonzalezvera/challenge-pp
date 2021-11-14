import { Router } from 'express'
import { current } from '../controllers/current.controller'

const router = Router();

router.route('/v1/current/:city?')
    .get(current);

export default router;