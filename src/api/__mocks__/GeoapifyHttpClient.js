/* eslint-disable class-methods-use-this */
export const mockGetDataByName = jest.fn().mockRejectedValue();

export const mockgetDataByCoords = jest.fn().mockRejectedValue();

export class MockGeoapifyHttpClient {
  async getDataByName(name) {
    return mockGetDataByName(name);
  }

  async getDataByCoords(longitude, latitude) {
    return mockgetDataByCoords(longitude, latitude);
  }
}

export const geoapifyClient = new MockGeoapifyHttpClient();
