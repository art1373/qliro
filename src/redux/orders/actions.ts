import * as orderTypes from "./types";
import { Order } from "./types";

export type FetchOrderAction = {
  type: typeof orderTypes.FETCH_ORDERS;
  onSuccess: () => void;
  onFailure: () => void;
};

export type SetUserOrdersAction = {
  type: typeof orderTypes.SET_ORDERS;
  orders: Order;
};

export const fetchOrders = (
  onSuccess: () => void,
  onFailure: () => void
): FetchOrderAction => {
  return { type: orderTypes.FETCH_ORDERS, onSuccess, onFailure };
};

export const setOrders = (orders: Order): SetUserOrdersAction => {
  return { type: orderTypes.SET_ORDERS, orders };
};
