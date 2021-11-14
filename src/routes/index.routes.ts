import { Router } from 'express'
import { Request, Response } from 'express'
import { ENVCONFIG } from '../config'

const router = Router();
const appName = "challenge personalPay";
router.route('/')
    .get((req: Request, res: Response) => {
        res.redirect('/v1');

    });

router.route('/v1')
    .get((req: Request, res: Response) => {

        res.json({
            estado: "ok",
            app: appName,
            fechaHora_request: new Date().toLocaleString(),
            entorno: ENVCONFIG.NODE_ENV || "unspecified",
            autor: "Ing. Claudio Enrique González Vera"
        });
    });


export default router;