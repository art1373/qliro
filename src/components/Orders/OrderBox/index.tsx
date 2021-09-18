import React from "react";
import "./style.scss";
import { Order } from "../../../redux/orders/types";
import { ReactComponent as Pointer } from "../../../assets/img/corner-down-right.svg";

type Props = {
  order: Order;
};

const OrderBox = ({ order }: Props) => {
  return (
    <div className="container">
      <div className="status-tag">{order.tag}</div>
      <div className="details">
        <div className="order-num">
          {order.number}
          <Pointer className="pointer" />
        </div>
        <div>{order.createdAt}</div>
        <div>
          {order.country} {order.store}
        </div>
        <div>{order.payment_method}</div>
        <div>{order.payment_status}</div>
        <div>
          {order.amount} {order.currency}
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
