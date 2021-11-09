import {storeState, stateControl, changeState, feed, blueFood, hydrate, superWater, App} from '../src/js/plant.js';

describe('storeState', () => {
  test('Should be able to water plant', () => {
    const initialState = { soil: 0, light: 0, water: 0 };
    const plant = storeState(initialState);
    const fern = hydrate(plant);
    expect(fern.water).toEqual(1);
  });
});