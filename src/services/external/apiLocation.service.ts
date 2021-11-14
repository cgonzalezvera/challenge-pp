
import axios, { AxiosRequestConfig } from 'axios'
import { logError } from '../../logger';
import { IpApiDtoModel } from '../../models/responseIpApiModel';
import { ENVCONFIG } from '../../config'

const urlIpApi = ENVCONFIG.URL_IP_API_SERVICE;

async function getIpLocation(): Promise<IpApiDtoModel> {
    const config: AxiosRequestConfig = {
        method: 'get',
        url: urlIpApi
    }
    const response = await axios(config)
        .then(r => r)
        .catch(re => {
            logError(`Error al llamar api ${urlIpApi}: ${re}`);
            return re.response;
        });
    return response.data as IpApiDtoModel;
}

export default getIpLocation;

