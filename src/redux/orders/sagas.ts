import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as orderApi from "../../api/orders";
import * as ordrActions from "../orders/actions";
import * as orderTypes from "../orders/types";

function* fetchOrdersSaga(action: any) {
  try {
    const { data } = yield call(orderApi.fetchOrdersApi);

    const orders = data;
    yield delay(3000);
    if (orders.length) yield put(ordrActions.setOrders(orders));

    if (action.onSuccess) {
      action.onSuccess();
    }
  } catch (error) {
    if (action.onFailure) {
      console.log({ error });
      action.onFailure();
    }
  }
}

function* watchFetchOrders() {
  yield takeLatest(orderTypes.FETCH_ORDERS, fetchOrdersSaga);
}

export const orderSagas = [watchFetchOrders()];
