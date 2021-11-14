import _ from "lodash";

function unixTimestampToLocalDate(unixDateTime: number, fmt: (dt: Date) => string): string {
    return fmt(new Date(unixDateTime * 1000));
}
export interface ResponseCurrentWeatherModel {
    descripcion: string;
    temperatura: number;
    sensacion_termica: number;
    temperatura_max: number;
    temperatura_min: number;
    humedad: string;
    nombre_ubicacion: string;
    nubocidad: string;
    puestaDelSol: string;
    salidaDelsol: string

}

export interface TemperaturaItemModel {
    dia: number;
    min: number | null;
    max: number | null;
    noche: number;
    tarde: number;
    maniana: number;
}
export interface DayForecastItemModel {
    fecha_dia: string;
    clima: string;
    humedad: string;
    nubocidad: string;
    puestaDelSol: string;
    salidaDelsol: string;
    temparatura: TemperaturaItemModel;
    sensacion_termica: TemperaturaItemModel

}


export interface ResponseForecastDaysModel {
    nombre_ubicacion: string;
    pronosticos: DayForecastItemModel[];
}



export function isWeatherApiErrorResponse(obj: any): boolean {
    const keys = _.keysIn(obj);

    return keys.length == 2 && keys.includes('cod') && keys.includes('message');
}




export function fromForecastDayApiToResponseItemModel(forecastItemDay: any): DayForecastItemModel {
    return {
        fecha_dia: unixTimestampToLocalDate(forecastItemDay.dt, dt => dt.toLocaleDateString()),
        clima: forecastItemDay.weather[0].description,
        humedad: `${forecastItemDay.humidity}%`,
        nubocidad: `${forecastItemDay.clouds}%`,
        puestaDelSol: unixTimestampToLocalDate(forecastItemDay.sunset, dt => dt.toLocaleString()),
        salidaDelsol: unixTimestampToLocalDate(forecastItemDay.sunrise, dt => dt.toLocaleString()),
        temparatura: {
            dia: forecastItemDay.temp.day,
            min: forecastItemDay.temp.min,
            max: forecastItemDay.temp.max,
            noche: forecastItemDay.temp.nigth,
            tarde: forecastItemDay.temp.eve,
            maniana: forecastItemDay.temp.morn
        },
        sensacion_termica: {
            dia: forecastItemDay.feels_like.day,
            min: null,
            max: null,
            noche: forecastItemDay.feels_like.nigth,
            tarde: forecastItemDay.feels_like.eve,
            maniana: forecastItemDay.feels_like.morn
        }
    }
}
export function fromWeatherApiToResponseCurrentWeatherModel(weatherApi: any): ResponseCurrentWeatherModel {
    return {
        descripcion: weatherApi.weather[0].description,
        temperatura: weatherApi.main.temp,
        sensacion_termica: weatherApi.main.feels_like,
        temperatura_max: weatherApi.main.temp_max,
        temperatura_min: weatherApi.main.temp_min,
        humedad: `${weatherApi.main.humidity}%`,
        nombre_ubicacion: weatherApi.name,
        nubocidad: `${weatherApi.clouds.all}%`,
        salidaDelsol: unixTimestampToLocalDate(weatherApi.sys.sunrise, dt => dt.toLocaleString()),
        puestaDelSol: unixTimestampToLocalDate(weatherApi.sys.sunset, dt => dt.toLocaleString()),

    };
}