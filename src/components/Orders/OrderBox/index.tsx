import React from "react";
import "./style.scss";
import { Order } from "../../../redux/orders/types";
import Store from "./Store";
import OrderNumber from "./OrderNumber";
import PaymentMethod from "./PaymentMethod";
import Tag from "./Tag";
import Status from "./Status";
import OrderDate from "./OrderDate";
import OrderAmount from "./OrderAmount";

type Props = {
  order: Order;
};

const OrderBox = ({ order }: Props) => {
  const {
    amount,
    country,
    createdAt,
    currency,
    number,
    payment_method,
    payment_status,
    store,
    tag,
  } = order;

  return (
    <div className="container">
      <Tag tag={tag} />
      <OrderNumber orderNumber={number} />
      <OrderDate orderDate={createdAt} />
      <Store country={country} store={store} />
      <PaymentMethod payment={payment_method} />
      <Status paymentStatus={payment_status} />
      <OrderAmount currency={currency} amount={amount} />
    </div>
  );
};

export default OrderBox;
