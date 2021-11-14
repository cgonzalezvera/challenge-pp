import { Request, Response } from 'express'
import { fromForecastDayApitoResponseItemModel, isWeatherGenericModel, ResponseForecastDaysModel } from '../models/responseWeatherModel';
import getIpLocation from '../services/external/apiLocation.service';
import getForecastByCityName from '../services/external/apiForecast.service';


export async function forecast(req: Request, res: Response) {


  let cityValueParam = req.params.city || '';
  if (!req.params.city) {
    const currentLocation = await getIpLocation();
    if (!currentLocation || !currentLocation.city) {
      res.status(500).json("Error determinando la ubicación.");
      return;
    }
    cityValueParam = currentLocation.city || '';
  }
  const foreCastDto = await getForecastByCityName(cityValueParam);

  if (isWeatherGenericModel(foreCastDto)) {
    res.status(foreCastDto.cod).json("Error determinando la ubicación.");

    return;
  }

  const listForecast = foreCastDto.list as any[];
  console.log("listado de forescast ", listForecast)
  const forecast5Days = listForecast.map(item => fromForecastDayApitoResponseItemModel(item));

  res.status(200).json({ nombre_ubicacion: foreCastDto.city.name, pronosticos: forecast5Days } as ResponseForecastDaysModel);

}


