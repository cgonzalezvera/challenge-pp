import { Request, Response } from 'express'
import { fromForecastDayApiToResponseItemModel, isWeatherApiErrorResponse, ResponseForecastDaysModel } from '../models/responseWeatherModel';
import getForecastByCityName from '../services/external/apiForecast.service';
import { getCurrentLocation } from '../services/helpers/helperLocation.service';


export async function forecast(req: Request, res: Response) {

  const location = await getCurrentLocation(req);

  if (location.errorMessage) {
    res.status(500).json(location.errorMessage);
    return;
  }
  const foreCastDto = await getForecastByCityName(location.cityName);

  if (isWeatherApiErrorResponse(foreCastDto)) {
    res.status(foreCastDto.cod).json("Error determinando la ubicación.");

    return;
  }

  const listForecast = foreCastDto.list as any[];
  const forecast5Days = listForecast.map(item => fromForecastDayApiToResponseItemModel(item));

  res.status(200).json({ nombre_ubicacion: foreCastDto.city.name, pronosticos: forecast5Days } as ResponseForecastDaysModel);

}


