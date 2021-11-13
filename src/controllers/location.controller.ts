import { Request, Response } from 'express'
import { SolicitudMovimientoFondos } from '../models/solicitudMovimientoFondos'
import axios, { AxiosRequestConfig } from 'axios'
import { ENVCONFIG } from '../config'
import { logInfo, logError } from '../logger';
import getIpLocation from '../services/external/apiLocation.service'
import { mapToLocation } from '../models/responseIpApiModel';

export async function location(req: Request, res: Response) {


    const dto = await getIpLocation();
    const location = mapToLocation(dto);

    if (!location.estadoRespuesta) {
        res.status(500).json(location);
    }
    res.status(200).json(location);
}