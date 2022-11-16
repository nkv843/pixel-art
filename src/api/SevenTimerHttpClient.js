const BASE_URL = 'https://www.7timer.info/bin/civil.php?';
const HARD_QUERY = {
  ac: 0, unit: 'metric', output: 'json', tzshift: 0,
};
export class SevenTimerHttpClient {
  constructor(base, hardQuery) {
    this.baseURL = base;
    this.hardQuery = hardQuery;
  }

  async getWeatherData(longitude, latitude) {
    const fetchURL = `${this.baseURL}${new URLSearchParams({
      lon: longitude.toFixed(1), lat: latitude.toFixed(1), ...this.hardQuery,
    })}`;
    const response = await fetch(fetchURL);
    return response.json();
  }
}

export const sevenTimerClient = new SevenTimerHttpClient(BASE_URL, HARD_QUERY);
