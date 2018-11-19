import { SET_SCREEN } from 'redux/reducers/screen';

function setScreen(screen) {
  return {
    type: SET_SCREEN,
    screen,
  };
}

export function dispatchSetScreen(screen) {
  return (dispatch, getState) => {
    console.warn('state before: ', getState());
    dispatch(setScreen(screen));
    console.warn('state after: ', getState());
  };
}
