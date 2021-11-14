import { Request, Response } from 'express'
import getIpLocation from '../services/external/apiLocation.service'
import { createLocationFrom } from '../models/responseIpApiModel';

export async function location(req: Request, res: Response) {


    const dto = await getIpLocation();
    const location = createLocationFrom(dto);

    if (!location.estadoRespuesta) {
        res.status(500).json(location);
    }
    res.status(200).json(location);
}