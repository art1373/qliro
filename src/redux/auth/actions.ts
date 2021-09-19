import * as authTypes from "./types";

export type SetAuthAction = {
  type: string;
  auth: boolean;
};

export const setAuth = (auth: boolean): SetAuthAction => {
  return { type: authTypes.SET_AUTH, auth };
};
