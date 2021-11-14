
import axios, { AxiosRequestConfig } from 'axios'
import { logError } from '../../logger';
import { ENVCONFIG } from '../../config'

const urlWeatherServiceBase = "http://api.openweathermap.org/data/2.5/forecast/daily";
const apiKey = ENVCONFIG.API_KEY_OPEN_WEATHER_SERVICE;
const maxForecastDays = 5;

function createUrlRequest(urlWeatherServiceBase: string, apiKey: string, cityValueParam: string): string {
    return `${urlWeatherServiceBase}?q=${encodeURI(cityValueParam)}&cnt=${maxForecastDays}&lang=es&units=metric&appid=${apiKey}`;
}
async function getForecastByCityName(cityName: string): Promise<any> {


    const config: AxiosRequestConfig = {
        method: 'get',
        url: createUrlRequest(urlWeatherServiceBase, apiKey, cityName)
    }

    const response = await axios(config)
        .then(r => r)
        .catch(re => {
            logError(`Error al llamar api ${urlWeatherServiceBase}: ${re}`);
            return re.response;
        });
    return response.data;
}

export default getForecastByCityName;



