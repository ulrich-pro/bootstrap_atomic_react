export const SET_SCREEN = 'SET_SCREEN';

const initialState = {
  name: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN:
      return { ...state, name: action.screen };
    default:
      return state;
  }
};
