import { renderHook, act, waitFor } from '@testing-library/react';
import useSearchWeather from '../useSearchWeather';
import * as mockGeoapify from '../../api/GeoapifyHttpClient';
import * as mockSevenTimer from '../../api/SevenTimerHttpClient';
import { geoapifyReturn, seventimerReturn } from '../__fixtures__/fixtures';

describe('useSearchWeather', () => {
  describe('Incorrect input handling', () => {
    it('should throw error while request only consist of spaces', async () => {
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute('   ');
      });
      expect(result.current[1].error).toBe('Error: Too many spaces!');
    });

    it('should throw error while request only consist of numbers', async () => {
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute('9128390192');
      });
      expect(result.current[1].error).toBe('Error: This is a phone nubmer, not a city!');
    });

    it('should throw error while request is an empty string', async () => {
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute('');
      });
      expect(result.current[1].error).toBe("Error: You don't even type anything!");
    });

    it('should switch loading state back to false', async () => {
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute('');
      });
      await waitFor(async () => {
        expect(result.current[1].loading).toBe(false);
      });
    });

    it('should left weathers list untouched', async () => {
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute('');
      });
      await waitFor(async () => {
        expect(result.current[1].weathers).toEqual([]);
      });
    });
  });
  describe('Correct input handling', () => {
    const request = 'chisinau';
    it('should call geoapify client', async () => {
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute(request);
      });
      expect(mockGeoapify.mockGetDataByName).toHaveBeenCalledWith(request);
    });

    it('should call seventimer client with the proper arguments', async () => {
      mockGeoapify.mockGetDataByName.mockResolvedValueOnce(geoapifyReturn);
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute(request);
      });
      expect(mockSevenTimer.mockGetWeatherData)
        .toHaveBeenCalledWith(geoapifyReturn.longitude, geoapifyReturn.latitude);
    });

    it('should set new weathers to weathers list', async () => {
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
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
      const [execute] = result.current;
      await act(async () => {
        await execute(request);
      });
      expect(result.current[1].error).toEqual('Error: Please try again, we can\'t find this settlement');
    });

    it('should not to throw errors when happy path', async () => {
      mockGeoapify.mockGetDataByName.mockResolvedValueOnce(geoapifyReturn);
      mockSevenTimer.mockGetWeatherData.mockResolvedValueOnce(seventimerReturn);
      const { result } = renderHook(useSearchWeather);
      const [execute] = result.current;
      await act(async () => {
        await execute(request);
      });
      expect(result.current[1].error).toEqual(null);
    });
  });
});
