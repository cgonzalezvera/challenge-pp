import { Router } from 'express'
import { location } from '../controllers/location.controller'

const router = Router();

router.route('/location')
    .get(location);



export default router;