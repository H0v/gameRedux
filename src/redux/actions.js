export const SET_FINISHED = "SET_FINISHED";
export const SET_STEPS = "SET_STEPS";
export const SET_COLORS = "SET_COLORS";
export const SET_SELECTED = "SET_SELECTED";
export const SET_MAX = "SET_MAX";
export const SET_PREVCOLORS = "SET_PREVCOLORS";
export const SET_PREVSELECTED = "SET_PREVSELECTED";
export const SET_RESTART = "SET_RESTART";

export const setFinished = (finished) => ({
  type: SET_FINISHED,
  payload: finished,
});

export const setSteps = (step) => ({
  type: SET_STEPS,
  payload: step,
});

export const setColors = (colors) => ({
  type: SET_COLORS,
  payload: colors,
});

export const setSelectedColor = (color) => ({
  type: SET_SELECTED,
  payload: color,
});

export const setMax = (value) => ({
  type: SET_MAX,
  payload: value,
});

export const setPrevColors = (colors) => ({
  type: SET_PREVCOLORS,
  payload: colors,
});

export const setPrevSelected = (selected) => ({
  type: SET_PREVSELECTED,
  payload: selected,
});

export const setRestart = (pl) => ({
  type: SET_RESTART,
  payload: pl,
});
