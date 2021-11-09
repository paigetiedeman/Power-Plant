
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

// *** WIP ADD NEW PLANT *** //
// export class PowerPlant extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       soil: 0,
//       water: 0,
//       light: 0
//     };
//   }
// }

// function LogPowerPlant() {
//   this.plants = {};
//   this.plantId = 0;
// }

// PowerPlant.prototype.addPlant = function(plant) {
//   plant.id = this.assignId();
//   this.plants[plant.id] = plant;
// };

// LogPowerPlant.prototype.assignId = function () {
//   this.plantId += 1;
//   return this.plantId;
// }
// *** END WIP ADD NEW PLANT *** //


export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

export const light = changeState("light")(2);
export const shade = changeState("light")(-2);

const initialState = { soil: 0, light: 0, water: 0, shade: 0 };

export const plant2 = storeState(initialState);