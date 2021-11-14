import { Request, Response } from 'express'
import getWeatherByCityName from '../services/external/apiWeather.service';
import { fromWeatherApiToResponseCurrentWeatherModel, isWeatherApiErrorResponse } from '../models/responseWeatherModel';
import { getCurrentLocation } from '../services/helpers/helperLocation.service';


export async function current(req: Request, res: Response) {



  const location = await getCurrentLocation(req);

  if (location.errorMessage) {
    res.status(500).json(location.errorMessage);
    return;
  }
  const weatherDto = await getWeatherByCityName(location.cityName);
  if (isWeatherApiErrorResponse(weatherDto)) {
    res.status(weatherDto.cod).json("Error determinando la ubicación.");

    return;
  }
  res.status(200).json(fromWeatherApiToResponseCurrentWeatherModel(weatherDto));

}


