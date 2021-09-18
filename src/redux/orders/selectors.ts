import { createSelector } from "reselect";

export const getOrdersSelector = createSelector(
  (state: any) => state.order.orders,
  (orders) => orders
);
