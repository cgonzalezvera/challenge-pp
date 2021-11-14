
import axios, { AxiosRequestConfig } from 'axios'
import { logError } from '../../logger';
import { ENVCONFIG } from '../../config'
import getIpLocation from './apiLocation.service';

const urlWeatherServiceBase = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = ENVCONFIG.API_KEY_OPEN_WEATHER_SERVICE;

function createUrlRequest(urlWeatherServiceBase: string, apiKey: string, cityValueParam: string): string {
    return `${urlWeatherServiceBase}?q=${encodeURI(cityValueParam)}&lang=es&units=metric&appid=${apiKey}`;
}
async function getWeatherByCityName(cityName: string | null): Promise<any> {

    let cityValueParam = cityName || '';
    if (!cityName) {
        const currentLocation = await getIpLocation();
        if (!currentLocation || !currentLocation.city) {
            return null;
        }
        cityValueParam = currentLocation.city || '';
    }

    const config: AxiosRequestConfig = {
        method: 'get',
        url: createUrlRequest(urlWeatherServiceBase, apiKey, cityValueParam)
    }

    const response = await axios(config)
        .then(r => r)
        .catch(re => {
            logError(`Error al llamar api ${urlWeatherServiceBase}: ${re}`);
            return re.response;
        });
    return response.data;
}

export default getWeatherByCityName;



