const mockGetWeatherData = jest.fn().mockRejectedValue();

export class MockSevenTimerHttpClient {
  constructor(getReturn) {
    this.getReturn = getReturn;
  }

  async getWeatherData() {
    return this.nameReturn;
  }
}

export const sevenTimerClient = new MockSevenTimerHttpClient(mockGetWeatherData);
