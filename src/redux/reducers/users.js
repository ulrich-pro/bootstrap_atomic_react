export const SET_USERS = 'SET_USERS';
export const SET_SELECTED_USER = 'SET_SELECTED_USER';

const initialState = {
  list: [],
  selectedUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, list: [...action.list] };
    case SET_SELECTED_USER:
      return { ...state, selectedUser: action.selectedUser};
    default:
      return state;
  }
};
