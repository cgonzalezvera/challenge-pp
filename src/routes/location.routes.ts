import { Router } from 'express'
import { location } from '../controllers/location.controller'

const router = Router();

router.route('/v1/location')
    .get(location);

export default router;