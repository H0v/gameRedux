import { combineReducers } from "redux";
import { controlsReducer } from "./controlsReducer";
import { mainReducer } from "./mainReducer";

export const gameReducers = combineReducers({
  main: mainReducer,
  controls: controlsReducer,
});
