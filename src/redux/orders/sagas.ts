import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as orderApi from "../../api/orders";
import * as ordrActions from "../orders/actions";
import * as orderTypes from "../orders/types";

function* fetchOrdersSaga(action: any) {
  try {
    const { data } = yield call(orderApi.fetchOrdersApi);

    const orders = data;
    yield delay(2000);
    if (orders) yield put(ordrActions.setOrders(orders));

    if (action.onSuccess) {
      action.onSuccess();
    }
  } catch (error) {
    console.log({ error });
  }
}

function* watchFetchOrders() {
  yield takeLatest(orderTypes.FETCH_ORDERS, fetchOrdersSaga);
}

export const orderSagas = [watchFetchOrders()];
