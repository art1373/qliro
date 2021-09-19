export const FETCH_ORDERS = "@FETCH_ORDERS";
export const SET_ORDERS = "@SET_ORDERS";

export interface Order {
  number: string | number;
  store: string;
  country: string;
  payment_method: string;
  payment_status: string;
  amount: number;
  currency: string;
  createdAt: number;
  tag: string;
}
