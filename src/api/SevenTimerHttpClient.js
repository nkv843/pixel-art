const BASE_URL = 'https://www.7timer.info/bin/api.pl?';

export class SevenTimerHttpClient {
  constructor(base) {
    this.baseURL = base;
  }

  async getWeatherData(longitude, latitude) {
    const fetchURL = `${this.baseURL}${new URLSearchParams({
      lon: longitude, lat: latitude, product: 'civil', output: 'json',
    })}`;
    const response = await fetch(fetchURL);
    return response.json();
  }
}

export const sevenTimerClient = new SevenTimerHttpClient(BASE_URL);
