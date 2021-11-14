import { Router } from 'express'
import { forecast } from '../controllers/forecast.controller';

const router = Router();

router.route('/v1/forecast/:city?')
    .get(forecast);

export default router;