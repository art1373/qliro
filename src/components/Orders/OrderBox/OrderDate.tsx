import React from "react";
import { normalizeDate } from "../../../utils/normalize";

type Props = {
  orderDate: number;
  testId: string;
};

const OrderDate = ({ orderDate, testId }: Props) => {
  return <div data-testid={testId}>{normalizeDate(orderDate)}</div>;
};
export default OrderDate;
