import getIpLocation from "../external/apiLocation.service";
import { Request } from 'express'

export async function getCurrentLocation(req: Request): Promise<{ cityName: string, errorMessage: string | null }> {
    if (req.params.city) {
        return { cityName: req.params.city, errorMessage: null };
    }
    const currentLocation = await getIpLocation();
    if (!currentLocation || !currentLocation.city) {
        return { cityName: '', errorMessage: 'Error determinando la ubicación. IP-API' };
    }

    return { cityName: currentLocation.city, errorMessage: null };


}