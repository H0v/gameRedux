import { SET_FINISHED, SET_STEPS, SET_RESTART } from "./actions";
const initialState = {
  finished: false,
  steps: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FINISHED:
      return { ...state, finished: action.payload };
    case SET_STEPS:
      return { ...state, steps: action.payload };
    case SET_RESTART:
      return { finished: action.payload.finished, steps: action.payload.steps };
    default:
      return state;
  }
};
