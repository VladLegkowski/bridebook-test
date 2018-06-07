import * as types from '../actions/action-types';

const initialState = {
  notification: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE_NUMBER:
      return Object.assign({}, state, { notification: state.notification + 1 });
    default:
      return state;
  }
};
