import useSearchWeather from "../useSearchWeather";
import { renderHook, act, waitFor } from '@testing-library/react';
import * as mockGeoapify from '../../api/GeoapifyHttpClient'
import * as mockSevenTimer from '../../api/SevenTimerHttpClient'

jest.mock('../../api/GeoapifyHttpClient');
jest.mock('../../api/SevenTimerHttpClient')
console.log(mockGeoapify);
console.log(mockSevenTimer);

describe('useSearchWeather', () => {
  describe('Incorrect input handling', () => {
    it('should throw error while request only consist of spaces', async () => {
      const { result } = renderHook(useSearchWeather)
      const execute = result.current[0]
      await act(async () => {
        await execute('   ')
      })
      expect(result.current[1].error).toBe("Error: Too many spaces!")
    })

    it('should throw error while request only consist of numbers', async () => {
      const { result } = renderHook(useSearchWeather)
      const execute = result.current[0]
      await act(async () => {
        await execute('9128390192')
      })
      expect(result.current[1].error).toBe("Error: This is a phone nubmer, not a city!")
    })

    it('should throw error while request is an empty string', async () => {
      const { result } = renderHook(useSearchWeather)
      const execute = result.current[0]
      await act(async () => {
        await execute('')
      })
      expect(result.current[1].error).toBe("Error: You don't even type anything!")
    })

    it('should switch loading state back to false', async () => {
      const { result } = renderHook(useSearchWeather)
      const execute = result.current[0]
      await act(async () => {
        await execute('')
      })
      expect(result.current[1].loading).toBe(false)
    })

    it('should left weathers list untouched', async () => {
      const { result } = renderHook(useSearchWeather)
      const execute = result.current[0]
      await act(async () => {
        await execute('')
      })
      expect(result.current[1].weathers).toEqual([])
    })
  })
  describe('Correct input handling', () => {
    it('should do nice', async () => {
      const { result } = renderHook(useSearchWeather)
      const execute = result.current[0]
      await act(async () => {
        await execute('chisinau')
      })
      await waitFor(async () => {
        //how to access executed function??
        expect(mockGeoapify.mockGetDataByName).toHaveBeenCalled()
      });
    })
  })
})
