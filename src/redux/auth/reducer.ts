import * as authTypes from "./types";
import update from "immutability-helper";
import { SetAuthAction } from "./actions";

export type AuthState = {
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  isLoggedIn: false,
};

type Action = SetAuthAction | any;

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case authTypes.SET_AUTH:
      return update(state, {
        isLoggedIn: { $set: action.auth },
      });

    default:
      return state;
  }
};
