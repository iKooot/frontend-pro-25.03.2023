import {
  ADD_USER,
  ADD_USERS,
  CLEAR_USERS,
  REMOVE_USER,
} from "./users.actions.js";

const initialState = {
  users: [],
};

// action === { type: EXAMPLE payload: { name: 'Example' } }
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      // here must to be logic of calculation or changing state (without side effect)
      const newState = {
        ...state,
        users: [...state.users, action.payload],
      };
      return newState;
    }
    case ADD_USERS: {
      // here must to be logic of calculation or changing state (without side effect)
      const newState = {
        ...state,
        users: [...state.users, ...action.payload],
      };
      return newState;
    }
    case REMOVE_USER: {
      return {
        ...state,
        users: state.users.filter((el) => el.id === action.payload),
      };
    }
    case CLEAR_USERS: {
      return {
        ...state,
        users: [],
      };
    }
    default: {
      return state;
    }
  }
}
