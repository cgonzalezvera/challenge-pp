import { Router } from 'express'
import { fondosDepositar, fondosExtraer } from '../controllers/fondos.controller'

const router = Router();

router.route('/Extraer')
    .post(fondosExtraer);

router.route('/Depositar')
    .post(fondosDepositar);

export default router;