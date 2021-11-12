import { Router } from 'express'
import { Request, Response } from 'express'
import { ENVCONFIG } from '../config'

const router = Router();
const appName = "midd-cico";
router.route('/')
    .get((req: Request, res: Response) => {
        res.json({
            status: "ok",
            appName: appName,
            howToWork: `Client <=> Gateway <=> ${appName}* <=> CICO Api`,
            lastRefresh: new Date().toLocaleString(),
            enviroment: ENVCONFIG.NODE_ENV || "unspecified"
        });
    });


export default router;