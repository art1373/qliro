import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrders: (state) => {
      state.loading = true;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { fetchOrders, setOrders } = orderSlice.actions;
export default orderSlice.reducer;
