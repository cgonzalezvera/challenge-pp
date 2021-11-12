import { Request, Response } from 'express'
import { SolicitudMovimientoFondos } from '../models/solicitudMovimientoFondos'
import axios, { AxiosRequestConfig } from 'axios'
import { ENVCONFIG } from '../config'
import { logInfo, logError } from '../logger';

export async function location(req: Request, res: Response) {



    res.status(200).json({ ubicacion: "tucuman" });
}