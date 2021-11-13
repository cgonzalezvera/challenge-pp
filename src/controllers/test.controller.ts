import { Request, Response } from 'express'
import axios, { AxiosRequestConfig } from 'axios'
import { ENVCONFIG } from '../config'
import { logInfo, logError } from '../logger';
import { ITestResponseModel, ITestSumModel } from '../models/testModel';

export async function suma(req: Request, res: Response) {

    let m: ITestSumModel = req.body;
    if (!m.a || !m.b) {
        res.status(400).json({ message: "valores de entrada no válidos", success: false } as ITestResponseModel);
        return;
    }
    res.status(200).json({ success: true, value: m.a + m.b } as ITestResponseModel);
}