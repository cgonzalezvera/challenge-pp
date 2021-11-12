import { Request, Response } from 'express'
import { SolicitudMovimientoFondos } from '../models/solicitudMovimientoFondos'
import axios, { AxiosRequestConfig } from 'axios'
import { ITokenIdentityServer } from '../models/ITokenIdentityServer';
import { ISolicitudMovimientoFondosResponse } from '../models/ISolicitudMovimientoFondosResponse';
import { ENVCONFIG } from '../config'
import { logInfo, logError } from '../logger';

export async function fondosExtraer(req: Request, res: Response) {
    let fondoViewModel: SolicitudMovimientoFondos = req.body;
    const apiFondosExtraer = ENVCONFIG.CO_BASE_URL + 'Fondos/Extraer';
    
    let responseCO = await llamarApiFondos(fondoViewModel, apiFondosExtraer);
    
    res.status(responseCO.statusCode).json(responseCO.data);
}

export async function fondosDepositar(req: Request, res: Response) {
    let fondoViewModel: SolicitudMovimientoFondos = req.body;
    const apiFondosDepositar = ENVCONFIG.CI_BASE_URL + 'Fondos/Depositar';
    
    let responseCI = await llamarApiFondos(fondoViewModel, apiFondosDepositar);

    res.status(responseCI.statusCode).json(responseCI.data);
}

async function llamarApiFondos(fondosViewModel: SolicitudMovimientoFondos, endpoint: string):Promise<{data:ISolicitudMovimientoFondosResponse; statusCode:number}> {
  const tokenIdentity = await obtenerTokenIdentity();
  const config: AxiosRequestConfig = {  
    headers: { 
      'Authorization': 'Bearer ' + tokenIdentity, 
      'Content-Type': 'application/json'
    },
  };

  fondosViewModel.fechaMovimiento = new Date();
  fondosViewModel.IdRecaudadora = 4;

  const resp = await axios.post(endpoint, JSON.stringify(fondosViewModel), config)
    .then(r => r)
    .catch(re => {
      logError(`Error al llamar api de Fondos, endpoint ${endpoint}: ${re}`);
      return re.response;
    });

  return { data:resp.data, statusCode: resp.status };
}

async function obtenerTokenIdentity(): Promise<string>{
    
    let urlContent=new URLSearchParams();
      urlContent.append( 'client_id',ENVCONFIG.IS_CLIENT_ID);
      urlContent.append( 'client_secret',ENVCONFIG.IS_CLIENT_SECRET);
      urlContent.append( 'grant_type',ENVCONFIG.IS_GRANT_TYPE);
      urlContent.append( 'scope',ENVCONFIG.IS_SCOPE);

    const config: AxiosRequestConfig = {     
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    };

    const responseIS: ITokenIdentityServer = await axios.post(ENVCONFIG.IS_URL, urlContent, config)
      .then(r=>r.data)
      .catch(re => {
        logError(`Error al obtener token de IdentityServer: ${re}`);
        return {access_token: ''};
      });

    return responseIS.access_token;
}