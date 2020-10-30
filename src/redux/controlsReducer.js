import {
  SET_COLORS,
  SET_MAX,
  SET_PREVCOLORS,
  SET_PREVSELECTED,
  SET_SELECTED,
} from "./actions";
const initialState = {
  colors: [],
  selectedColor: "",
  MAX_COUNT: null,
  prevColors: null,
  prevSelected: "",
};

export const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLORS:
      return { ...state, colors: action.payload };
    case SET_MAX:
      return { ...state, MAX_COUNT: action.payload };
    case SET_PREVCOLORS:
      return { ...state, prevColors: action.payload };
    case SET_PREVSELECTED:
      return { ...state, prevSelected: action.payload };
    case SET_SELECTED:
      return { ...state, selectedColor: action.payload };
    default:
      return state;
  }
};
