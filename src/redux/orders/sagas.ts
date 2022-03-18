import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as orderApi from "../../api/orders";
import { fetchOrders, setOrders } from "../orders/orderSlice";

function* fetchOrdersSaga(action: any) {
  try {
    const { data } = yield call(orderApi.fetchOrdersApi);

    const orders = data;
    yield delay(2000);
    if (orders) yield put(setOrders(orders));

    if (action.onSuccess) {
      action.onSuccess();
    }
  } catch (error) {
    console.log({ error });
  }
}

function* watchFetchOrders() {
  yield takeLatest(fetchOrders, fetchOrdersSaga);
}

export const orderSagas = [watchFetchOrders()];
