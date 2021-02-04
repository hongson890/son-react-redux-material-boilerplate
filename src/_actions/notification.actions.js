import { notificationConstants } from '../_constants';

export const notificationActions = {
  success,
  error,
  clear
};

function success(message) {
  return (dispatch) => {
    dispatch({ type: notificationConstants.SUCCESS, message });
  };
}

function error(message) {
  return (dispatch) => {
    dispatch({ type: notificationConstants.ERROR, message });
  };
}

function clear() {
  return (dispatch) => {
    dispatch({ type: notificationConstants.CLEAR });
  };
}
