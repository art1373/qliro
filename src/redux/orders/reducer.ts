import * as orderTypes from "./types";
import update from "immutability-helper";
import { SetUserOrdersAction } from "./actions";
import { Order } from "./types";

export type OrderState = {
  orders: Order[] | [];
};

const initialState: OrderState = {
  orders: [],
};

type Action = SetUserOrdersAction | any;

export const orderReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case orderTypes.SET_ORDERS:
      return update(state, {
        orders: { $set: action.orders },
      });

    default:
      return state;
  }
};
