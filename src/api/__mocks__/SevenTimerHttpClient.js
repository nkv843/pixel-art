/* eslint-disable class-methods-use-this */
export const mockGetWeatherData = jest.fn().mockRejectedValue();

export class MockSevenTimerHttpClient {
  async getWeatherData(longitude, latitude) {
    return mockGetWeatherData(longitude, latitude);
  }
}

export const sevenTimerClient = new MockSevenTimerHttpClient(mockGetWeatherData);
