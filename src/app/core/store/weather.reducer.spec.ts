import * as fromReducer from './weather.reducer';
import * as actions from './weather.actions';
import { Weather } from '../models/weather.model';

describe('WeatherReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.weatherReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('addCity action', () => {
    it('should add an empty city & update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: fromReducer.WeatherState = {
        availableCities: initialState.availableCities,
        selectedCities: [
          { name: '', units: '' },
          { name: '', units: '' },
        ],
        weather: initialState.weather,
      };
      const action = actions.addCity();
      const state = fromReducer.weatherReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('saveCity action', () => {
    it('should update the city & add "loading" to weather array - in an immutable way', () => {
      const initialState: fromReducer.WeatherState = {
        availableCities: [],
        selectedCities: [
          { name: 'abc', units: 'def' },
          { name: 'abc', units: 'def' },
          { name: 'abc', units: 'def' },
        ],
        weather: [{ loading: false }, { loading: false }, { loading: false }]
      };
      const newState: fromReducer.WeatherState = {
        availableCities: [],
        selectedCities: [
          { name: 'abc', units: 'def' },
          { name: 'ABC', units: 'DEF' },
          { name: 'abc', units: 'def' },
        ],
        weather: [{ loading: false }, { loading: true }, { loading: false }],
      };
      const action = actions.saveCity({ city: { name: 'ABC', units: 'DEF' }, index: 1 });
      const state = fromReducer.weatherReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });

  });

  describe('weatherLoadedSuccess action', () => {
    it('should update the weather array - in an immutable way', () => {
      const weatherMock = { mock: 'mock' } as unknown as Weather;
      const { initialState } = fromReducer;
      const newState: fromReducer.WeatherState = {
        availableCities: initialState.availableCities,
        selectedCities: initialState.selectedCities,
        weather: [{ loading: false, value: weatherMock }],
      };
      const action = actions.weatherLoadedSuccess({ weather: weatherMock, index: 0 });
      const state = fromReducer.weatherReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('weatherLoadedFailed action', () => {
    it('should update the weather array - in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: fromReducer.WeatherState = {
        availableCities: initialState.availableCities,
        selectedCities: initialState.selectedCities,
        weather: [{ loading: false, error: true }],
      };
      const action = actions.weatherLoadedFailed({ index: 0 });
      const state = fromReducer.weatherReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
