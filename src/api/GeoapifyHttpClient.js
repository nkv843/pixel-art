const API_KEY = 'ae2f19f4cf8545b49bb8edd236d9a4cd';
const BASE_URL = 'https://api.geoapify.com/v1/geocode/';
const COORDINATE_ENDPOINT = 'search?';
const LOCALITY_ENDPOINT = 'reverse?';

export class GeoapifyHttpClient {
  constructor(baseURL, apiKey) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  async getDataByName(name) {
    const fetchURL = `${this.baseURL}${COORDINATE_ENDPOINT}${new URLSearchParams({ apiKey: this.apiKey, text: name })}`;
    const response = await fetch(fetchURL);
    const localData = (await response.json()).features[0].properties;
    const timezone = localData.timezone.offset_STD_seconds / 3600;
    const address = `${localData.city}, ${localData.country}`;
    const latitude = localData.lat;
    const longitude = localData.lon;
    return ({
      timezone, address, latitude, longitude,
    });
  }

  async getDataByCoords(longitude, latitude) {
    const fetchURL = `${this.baseURL}${LOCALITY_ENDPOINT}${new URLSearchParams({ apiKey: this.apiKey, lat: latitude, lon: longitude })}`;
    const response = await fetch(fetchURL);
    const localData = (await response.json()).features[0].properties;
    const timezone = localData.timezone.offset_STD_seconds / 3600;
    const address = `${localData.city}, ${localData.country}`;
    return ({ timezone, address });
  }
}

export const geoapifyClient = new GeoapifyHttpClient(BASE_URL, API_KEY);
