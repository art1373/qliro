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
    <div className="container" data-testid="order-box">
      <Tag tag={tag} testId="order-box-tag" />
      <OrderNumber orderNumber={number} testId="order-box-number" />
      <OrderDate orderDate={createdAt} testId="order-box-date" />
      <Store country={country} store={store} testId="order-box-store" />
      <PaymentMethod payment={payment_method} testId="order-box-pay-method" />
      <Status paymentStatus={payment_status} testId="order-box-status" />
      <OrderAmount
        currency={currency}
        amount={amount}
        testId="order-box-amount"
      />
    </div>
  );
};

export default OrderBox;
