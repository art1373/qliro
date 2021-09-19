import * as React from "react";
import Loader from "react-loader-spinner";
import * as Redux from "react-redux";
import { OrderBox, Header, Info, Labels, Pagination } from "../components";
import { fetchOrders } from "../redux/orders/actions";
import { getOrdersSelector } from "../redux/orders/selectors";
import { Order } from "../redux/orders/types";
import "./panel.scss";

function Panel() {
  const dispatch = Redux.useDispatch();
  const orders = Redux.useSelector(getOrdersSelector);

  React.useEffect(() => {
    dispatch(
      fetchOrders(
        () => {},
        () => {}
      )
    );
  }, [dispatch]);

  return (
    <>
      <Header />
      <Info />
      <Labels />
      {orders.length ? (
        orders.map((order: Order) => (
          <div className="box-parent">
            <OrderBox key={Math.random()} order={order} />
          </div>
        ))
      ) : (
        <div className="loader">
          <Loader
            type="TailSpin"
            color={"#64e1c3"}
            height={200}
            width={100}
            timeout={4000}
          />
        </div>
      )}
      <div className="paginate-wrap">
        <Pagination pageCount={orders.length || 4} />
      </div>
    </>
  );
}

export default Panel;
