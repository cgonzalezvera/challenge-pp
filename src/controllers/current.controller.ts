import { Request, Response } from 'express'
import getWeatherByCityName from '../services/external/apiWeather.service';
import { fromWeatherApiToResponseCurrentWeatherModel, isWeatherGenericModel } from '../models/responseWeatherModel';


export async function current(req: Request, res: Response) {

  const cityParam = req.params.city;

  const weatherDto = await getWeatherByCityName(cityParam);
  if (isWeatherGenericModel(weatherDto)) {
    console.log("error de localización");
    res.status(weatherDto.cod).json("Error determinando la ubicación.");

    return;
  }
  res.status(200).json(fromWeatherApiToResponseCurrentWeatherModel(weatherDto));

}


