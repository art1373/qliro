import React from "react";
import { ReactComponent as Pointer } from "../../../assets/img/corner-down-right.svg";
import "../../../theme/sharedStyles.scss";
import "./OderNumber.style.scss";

type Props = {
  orderNumber: number | string;
  testId: string;
};

const OrderDate = ({ orderNumber, testId }: Props) => {
  return (
    <div className="flex-center" data-testid={testId}>
      <div>{orderNumber}</div>
      <div>
        <Pointer className="pointer" />
      </div>
    </div>
  );
};

export default OrderDate;
