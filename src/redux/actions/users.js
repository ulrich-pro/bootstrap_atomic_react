import { SET_USERS } from 'redux/reducers/users';
import { SET_SELECTED_USER } from 'redux/reducers/users';

function setUsersList(list) {
  return {
    type: SET_USERS,
    list,
  };
}

function setUSelectedUser(selectedUser) {
  return { type: SET_SELECTED_USER, selectedUser };
}

export function dispatchSetUsers(users) {
  return (dispatch, getState) => {
    console.warn('state before: ', getState());
    dispatch(setUsersList(users));
    console.warn('state after: ', getState());
  };
}

export function dispatchSetSelectedUser(user) {
  return (dispatch, getState) => {
    console.warn('state before: ', getState());
    dispatch(setUSelectedUser(user));
    console.warn('state after: ', getState());
  };
}
