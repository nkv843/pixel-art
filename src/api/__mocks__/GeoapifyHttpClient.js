/* eslint-disable class-methods-use-this */
export const mockGetDataByName = jest.fn().mockRejectedValue();

export const mockgetDataByCoords = jest.fn().mockRejectedValue();

export class MockGeoapifyHttpClient {
  async getDataByName() {
    return mockGetDataByName;
  }

  async getDataByCoords() {
    return mockgetDataByCoords;
  }
}

export const geoapifyClient = new MockGeoapifyHttpClient();
