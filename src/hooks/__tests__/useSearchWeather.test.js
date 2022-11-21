import useSearchWeather from "../useSearchWeather";
import { renderHook, act, waitFor } from '@testing-library/react';
import * as mockGeoapify from '../../api/GeoapifyHttpClient';
import * as mockSevenTimer from '../../api/SevenTimerHttpClient';

describe('useSearchWeather', () => {
  describe('Incorrect input handling', () => {
    it('should throw error while request only consist of spaces', async () => {
      const { result } = renderHook(useSearchWeather)
      const [ execute ] = result.current
      await act(async () => {
        await execute('   ')
      })
      expect(result.current[1].error).toBe("Error: Too many spaces!")
    })

    it('should throw error while request only consist of numbers', async () => {
      const { result } = renderHook(useSearchWeather)
      const [ execute ] = result.current
      await act(async () => {
        await execute('9128390192')
      })
      expect(result.current[1].error).toBe("Error: This is a phone nubmer, not a city!")
    })

    it('should throw error while request is an empty string', async () => {
      const { result } = renderHook(useSearchWeather)
      const [ execute ] = result.current
      await act(async () => {
        await execute('')
      })
      expect(result.current[1].error).toBe("Error: You don't even type anything!")
    })

    it('should switch loading state back to false', async () => {
      const { result } = renderHook(useSearchWeather)
      const [ execute ] = result.current
      await act(async () => {
        await execute('')
      })
      await waitFor(async () => {
        expect(result.current[1].loading).toBe(false)
      });
    })

    it('should left weathers list untouched', async () => {
      const { result } = renderHook(useSearchWeather)
      const [ execute ] = result.current
      await act(async () => {
        await execute('')
      })
      await waitFor(async () => {
        expect(result.current[1].weathers).toEqual([])
      });
    })
  })
  describe('Correct input handling', () => {
    const geoapifyReturn = {
      timezone: 2,
      address: 'Chișinau, Moldova',
      latitude: 47.0245117,
      longitude: 28.8322923,
    }
    const seventimerReturn = {
      "product": "civil",
      "init": `${new Date().getFullYear()}${new Date().getMonth() + 1}${new Date().getDate()}00`,
      "dataseries": [
        { "timepoint": 3, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 0, "temp2m": 2, "rh2m": "83%", "wind10m": { "direction": "N", "speed": 2 }, "weather": "cloudynight" },
        { "timepoint": 6, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 0, "temp2m": 1, "rh2m": "81%", "wind10m": { "direction": "SE", "speed": 2 }, "weather": "cloudyday" },
        { "timepoint": 9, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 0, "temp2m": 3, "rh2m": "70%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 12, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 0, "temp2m": 6, "rh2m": "65%", "wind10m": { "direction": "S", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 15, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 0, "temp2m": 5, "rh2m": "78%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 18, "cloudcover": 8, "lifted_index": 10, "prec_type": "none", "prec_amount": 0, "temp2m": 5, "rh2m": "90%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 21, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 1, "temp2m": 7, "rh2m": "91%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 24, "cloudcover": 9, "lifted_index": 6, "prec_type": "rain", "prec_amount": 3, "temp2m": 9, "rh2m": "95%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "lightrainnight" },
        { "timepoint": 27, "cloudcover": 9, "lifted_index": 2, "prec_type": "rain", "prec_amount": 3, "temp2m": 9, "rh2m": "91%", "wind10m": { "direction": "W", "speed": 3 }, "weather": "lightrainnight" },
        { "timepoint": 30, "cloudcover": 7, "lifted_index": 10, "prec_type": "rain", "prec_amount": 3, "temp2m": 5, "rh2m": "80%", "wind10m": { "direction": "NW", "speed": 3 }, "weather": "oshowerday" },
        { "timepoint": 33, "cloudcover": 6, "lifted_index": 15, "prec_type": "none", "prec_amount": 3, "temp2m": 6, "rh2m": "60%", "wind10m": { "direction": "NW", "speed": 4 }, "weather": "mcloudyday" },
        { "timepoint": 36, "cloudcover": 7, "lifted_index": 15, "prec_type": "none", "prec_amount": 3, "temp2m": 7, "rh2m": "56%", "wind10m": { "direction": "NW", "speed": 3 }, "weather": "mcloudyday" },
        { "timepoint": 39, "cloudcover": 7, "lifted_index": 15, "prec_type": "none", "prec_amount": 3, "temp2m": 5, "rh2m": "61%", "wind10m": { "direction": "N", "speed": 2 }, "weather": "mcloudynight" },
        { "timepoint": 42, "cloudcover": 8, "lifted_index": 15, "prec_type": "none", "prec_amount": 3, "temp2m": 4, "rh2m": "68%", "wind10m": { "direction": "NE", "speed": 2 }, "weather": "cloudynight" },
        { "timepoint": 45, "cloudcover": 8, "lifted_index": 15, "prec_type": "none", "prec_amount": 3, "temp2m": 3, "rh2m": "75%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 48, "cloudcover": 8, "lifted_index": 15, "prec_type": "rain", "prec_amount": 3, "temp2m": 3, "rh2m": "81%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "lightrainnight" },
        { "timepoint": 51, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 3, "temp2m": 2, "rh2m": "89%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "lightrainnight" },
        { "timepoint": 54, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 3, "temp2m": 2, "rh2m": "90%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "lightrainday" },
        { "timepoint": 57, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 3, "temp2m": 3, "rh2m": "85%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 60, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 3, "temp2m": 4, "rh2m": "90%", "wind10m": { "direction": "N", "speed": 2 }, "weather": "cloudyday" },
        { "timepoint": 63, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 3, "temp2m": 4, "rh2m": "89%", "wind10m": { "direction": "NE", "speed": 2 }, "weather": "lightrainnight" },
        { "timepoint": 66, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 3, "temp2m": 4, "rh2m": "90%", "wind10m": { "direction": "N", "speed": 2 }, "weather": "lightrainnight" },
        { "timepoint": 69, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 3, "temp2m": 4, "rh2m": "90%", "wind10m": { "direction": "NE", "speed": 2 }, "weather": "lightrainnight" },
        { "timepoint": 72, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 4, "rh2m": "91%", "wind10m": { "direction": "N", "speed": 2 }, "weather": "rainnight" },
        { "timepoint": 75, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 4, "rh2m": "99%", "wind10m": { "direction": "N", "speed": 2 }, "weather": "rainnight" },
        { "timepoint": 78, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 5, "rh2m": "90%", "wind10m": { "direction": "N", "speed": 2 }, "weather": "rainday" },
        { "timepoint": 81, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 5, "rh2m": "92%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "rainday" },
        { "timepoint": 84, "cloudcover": 9, "lifted_index": 10, "prec_type": "rain", "prec_amount": 4, "temp2m": 7, "rh2m": "94%", "wind10m": { "direction": "E", "speed": 3 }, "weather": "rainday" },
        { "timepoint": 87, "cloudcover": 9, "lifted_index": 10, "prec_type": "rain", "prec_amount": 4, "temp2m": 5, "rh2m": "92%", "wind10m": { "direction": "NW", "speed": 3 }, "weather": "rainnight" },
        { "timepoint": 90, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 4, "rh2m": "90%", "wind10m": { "direction": "W", "speed": 3 }, "weather": "rainnight" },
        { "timepoint": 93, "cloudcover": 8, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 2, "rh2m": "90%", "wind10m": { "direction": "W", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 96, "cloudcover": 8, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 2, "rh2m": "85%", "wind10m": { "direction": "NW", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 99, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 2, "rh2m": "80%", "wind10m": { "direction": "NW", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 102, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 2, "rh2m": "85%", "wind10m": { "direction": "NW", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 105, "cloudcover": 3, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 4, "rh2m": "70%", "wind10m": { "direction": "NW", "speed": 3 }, "weather": "pcloudyday" },
        { "timepoint": 108, "cloudcover": 2, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 5, "rh2m": "59%", "wind10m": { "direction": "W", "speed": 2 }, "weather": "clearday" },
        { "timepoint": 111, "cloudcover": 2, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 4, "rh2m": "70%", "wind10m": { "direction": "S", "speed": 2 }, "weather": "clearnight" },
        { "timepoint": 114, "cloudcover": 2, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 3, "rh2m": "70%", "wind10m": { "direction": "SE", "speed": 2 }, "weather": "clearnight" },
        { "timepoint": 117, "cloudcover": 3, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 2, "rh2m": "80%", "wind10m": { "direction": "SE", "speed": 2 }, "weather": "pcloudynight" },
        { "timepoint": 120, "cloudcover": 4, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 2, "rh2m": "85%", "wind10m": { "direction": "SE", "speed": 2 }, "weather": "pcloudynight" },
        { "timepoint": 123, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 3, "rh2m": "91%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 126, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 3, "rh2m": "95%", "wind10m": { "direction": "SE", "speed": 2 }, "weather": "cloudyday" },
        { "timepoint": 129, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 4, "temp2m": 9, "rh2m": "81%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 132, "cloudcover": 9, "lifted_index": 6, "prec_type": "none", "prec_amount": 4, "temp2m": 12, "rh2m": "72%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 135, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 4, "temp2m": 10, "rh2m": "88%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 138, "cloudcover": 9, "lifted_index": 6, "prec_type": "none", "prec_amount": 4, "temp2m": 10, "rh2m": "91%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 141, "cloudcover": 9, "lifted_index": 6, "prec_type": "none", "prec_amount": 4, "temp2m": 10, "rh2m": "94%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 144, "cloudcover": 9, "lifted_index": 6, "prec_type": "none", "prec_amount": 4, "temp2m": 9, "rh2m": "92%", "wind10m": { "direction": "SE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 147, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 4, "temp2m": 9, "rh2m": "86%", "wind10m": { "direction": "E", "speed": 2 }, "weather": "cloudynight" },
        { "timepoint": 150, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 7, "rh2m": "84%", "wind10m": { "direction": "E", "speed": 2 }, "weather": "cloudyday" },
        { "timepoint": 153, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 4, "temp2m": 9, "rh2m": "66%", "wind10m": { "direction": "E", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 156, "cloudcover": 9, "lifted_index": 6, "prec_type": "none", "prec_amount": 4, "temp2m": 11, "rh2m": "65%", "wind10m": { "direction": "E", "speed": 3 }, "weather": "cloudyday" },
        { "timepoint": 159, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 4, "temp2m": 9, "rh2m": "74%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 162, "cloudcover": 9, "lifted_index": 10, "prec_type": "none", "prec_amount": 4, "temp2m": 8, "rh2m": "71%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 165, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 7, "rh2m": "71%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "rainnight" },
        { "timepoint": 168, "cloudcover": 9, "lifted_index": 15, "prec_type": "none", "prec_amount": 4, "temp2m": 6, "rh2m": "78%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "cloudynight" },
        { "timepoint": 171, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 5, "rh2m": "76%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "rainnight" },
        { "timepoint": 174, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 5, "rh2m": "84%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "rainday" },
        { "timepoint": 177, "cloudcover": 9, "lifted_index": 15, "prec_type": "rain", "prec_amount": 4, "temp2m": 6, "rh2m": "82%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "rainday" },
        { "timepoint": 180, "cloudcover": 9, "lifted_index": 10, "prec_type": "rain", "prec_amount": 4, "temp2m": 7, "rh2m": "78%", "wind10m": { "direction": "NE", "speed": 3 }, "weather": "rainday" },
        { "timepoint": 183, "cloudcover": 9, "lifted_index": 10, "prec_type": "rain", "prec_amount": 4, "temp2m": 7, "rh2m": "84%", "wind10m": { "direction": "NE", "speed": 2 }, "weather": "rainnight" },
        { "timepoint": 186, "cloudcover": 9, "lifted_index": 10, "prec_type": "rain", "prec_amount": 4, "temp2m": 6, "rh2m": "77%", "wind10m": { "direction": "NE", "speed": 2 }, "weather": "rainnight" },
        { "timepoint": 189, "cloudcover": 9, "lifted_index": 10, "prec_type": "rain", "prec_amount": 4, "temp2m": 5, "rh2m": "92%", "wind10m": { "direction": "NE", "speed": 2 }, "weather": "rainnight" },
        { "timepoint": 192, "cloudcover": 9, "lifted_index": 10, "prec_type": "rain", "prec_amount": 4, "temp2m": 5, "rh2m": "95%", "wind10m": { "direction": "NE", "speed": 2 }, "weather": "rainnight" }
      ]
    }
    const request = 'chisinau';
    it('should call geoapify client', async () => {
      const { result } = renderHook(useSearchWeather);
      const [ execute ] = result?.current;
      await act(async () => {
        await execute(request)
      })
      expect(mockGeoapify.mockGetDataByName).toHaveBeenCalledWith(request)
    });

    it('should call seventimer client with the proper arguments', async () => {
      mockGeoapify.mockGetDataByName.mockResolvedValueOnce(geoapifyReturn)
      const { result } = renderHook(useSearchWeather)
      const [ execute ] = result.current;
      await act(async () => {
        await execute(request)
      })
      expect(mockSevenTimer.mockGetWeatherData).toHaveBeenCalledWith(geoapifyReturn.longitude, geoapifyReturn.latitude)
    });

    it('should set new weathers to weathers list', async () => {
      const { result } = renderHook(useSearchWeather);
      const [ execute ] = result.current;
      mockGeoapify.mockGetDataByName.mockResolvedValueOnce(geoapifyReturn);
      mockSevenTimer.mockGetWeatherData.mockResolvedValueOnce(seventimerReturn);
      await act(async () => {
        await execute(request);
      });
      expect(result.current[1].weathers.length).toEqual(1);

      mockGeoapify.mockGetDataByName.mockResolvedValueOnce(geoapifyReturn);
      mockSevenTimer.mockGetWeatherData.mockResolvedValueOnce(seventimerReturn);
      await act(async () => {
        await execute(request);
      });
      expect(result.current[1].weathers.length).toEqual(2);
    });

    it('should throw error when an empty array comes from the geoapify', async () => {
      mockGeoapify.mockGetDataByName.mockResolvedValueOnce({ address: 0 });
      const { result } = renderHook(useSearchWeather);
      const [ execute ] = result.current;
      await act(async () => {
        await execute(request);
      });
      expect(result.current[1].error).toEqual(`Error: Please try again, we can't find this settlement`);
    });

    it('should not to throw errors when happy path', async () => {
      mockGeoapify.mockGetDataByName.mockResolvedValueOnce(geoapifyReturn);
      mockSevenTimer.mockGetWeatherData.mockResolvedValueOnce(seventimerReturn);
      const { result } = renderHook(useSearchWeather);
      const [ execute ] = result.current;
      await act(async () => {
        await execute(request);
      });
      expect(result.current[1].error).toEqual(null);
    });
  })
})
