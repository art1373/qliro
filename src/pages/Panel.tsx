import * as React from "react";
import * as Redux from "react-redux";
import { OrderBox } from "../components";
import { fetchOrders } from "../redux/orders/actions";
import { getOrdersSelector } from "../redux/orders/selectors";
import { Order } from "../redux/orders/types";
import "./panel.scss";

function Panel() {
  const dispatch = Redux.useDispatch();
  const orders = Redux.useSelector(getOrdersSelector);
  console.log({ orders });

  React.useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <>
      {orders.length &&
        orders.map((order: Order) => <OrderBox order={order} />)}
    </>
  );
}

export default Panel;
