import { DECREASE, INCREASE, RESET } from "./counter.actions.js";

const initialState = {
  count: 0,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE: {
      console.log(action.payload)
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREASE: {
      const newCount = state.count === 0 ? 0 : state.count - 1;

      return {
        ...state,
        count: newCount,
      };
    }
    case RESET: {
      return { ...state, count: 0 };
    }
    default: {
      return state;
    }
  }
}

export const initianCounterState = initialState;
