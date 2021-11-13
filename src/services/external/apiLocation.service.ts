
import axios, { AxiosRequestConfig } from 'axios'
import { logError } from '../../logger';
import { IpApiDtoModel } from '../../models/responseIpApiModel';

const urlIpApi = "http://ip-api.com/json";

async function getIpLocation(): Promise<IpApiDtoModel> {
    const config: AxiosRequestConfig = {
        method: 'get',
        url: urlIpApi
    }
    const response = await axios(config)
        .then(r => r)
        .catch(re => {
            logError(`Error al llamar api de Fondos, endpoint ${urlIpApi}: ${re}`);
            return re.response;
        });
    return response.data as IpApiDtoModel;
}

export default
    getIpLocation;


/* async function llamarApiFondos(fondosViewModel: SolicitudMovimientoFondos, endpoint: string): Promise<{ data: ISolicitudMovimientoFondosResponse; statusCode: number }> {
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

    return { data: resp.data, statusCode: resp.status };
}

 */