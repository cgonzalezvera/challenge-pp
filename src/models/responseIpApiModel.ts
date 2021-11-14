export interface IpApiDtoModel {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
}

export interface LocationResponseModel {
    pais: string | null;
    provincia: string | null;
    ciudad: string | null;
    latitud: number | null;
    longitud: number | null;
    ipRequest: string | null;
    estadoRespuesta: boolean
}



export function createLocationFrom(model: IpApiDtoModel): LocationResponseModel {

    if (!model || model.status !== 'success') {
        return {
            pais: null,
            provincia: null,
            ciudad: null,
            latitud: null,
            longitud: null,
            ipRequest: null,
            estadoRespuesta: false
        }

    }

    return {
        pais: model.country,
        provincia: model.regionName,
        ciudad: model.city,
        latitud: model.lat,
        longitud: model.lon,
        ipRequest: model.query,
        estadoRespuesta: true
    }


}