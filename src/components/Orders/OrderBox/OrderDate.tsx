import React from "react";
import { normalizeDate } from "../../../utils/normalize";

type Props = {
  orderDate: number;
};

const OrderDate = ({ orderDate }: Props) => {
  return <div>{normalizeDate(orderDate)}</div>;
};
export default OrderDate;
