import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const stateReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(stateReducer);

// store.subscribe((event) => {
//   console.log('in subscribe, event: ', event);
//   const state = store.getState();
//   console.log('state: ', state);
// });

// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });

const store = configureStore({
  reducer: counterSlice.reducer,
});

// can also do something like =>
// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

export default store;
