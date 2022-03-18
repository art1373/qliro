import { createSelector } from "@reduxjs/toolkit";

export const getOrdersSelector = createSelector(
  (state: any) => state.order.orders,
  (orders) => orders
);
