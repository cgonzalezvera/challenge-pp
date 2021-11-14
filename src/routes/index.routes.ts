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
            status: "ok",
            appName: appName,
            lastRefresh: new Date().toLocaleString(),
            enviroment: ENVCONFIG.NODE_ENV || "unspecified"
        });
    });


export default router;