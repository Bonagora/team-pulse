// @flow
import Immutable from 'seamless-immutable';
import { authActionTypes } from '../actions/auth';

const initialState = Immutable({});

const userReducer = (
  state: {
    // eslint-disable-next-line flowtype/no-weak-types
    set: Function
  } = initialState,
  action: {
    type: string,
    user?: {
      uid: string,
      team?: string,
      email: string,
      location?: string,
      photoURL?: string,
      startDate?: number,
      anonymous?: boolean,
      displayName?: string,
      emailVerified: boolean
    },
    error?: {}
  }
) => {
  switch (action.type) {
    case authActionTypes.LOGIN_START:
      return state;

    case authActionTypes.STORE_USER_DATA:
      if (!action.user) return state;

      return Immutable.replace(state, action.user);

    case authActionTypes.LOGIN_ERROR:
      console.error(action.error);

      // Handle Errors here.
      // var errorCode = action.error.code;
      // var errorMessage = action.error.message;
      // if (errorCode === 'auth/wrong-password') {
      //   alert('Wrong password.');
      // } else {
      //   alert(errorMessage);
      // }

      return state;

    case authActionTypes.LOGOUT_START:
      return state;

    case authActionTypes.LOGOUT_SUCCESS:
      return Immutable.replace(state, {});

    case authActionTypes.LOGOUT_ERROR:
      console.error(action.error);
      return state;

    default:
      return state;
  }
};

export { userReducer as default };
