import React from "react";
import { ReactComponent as Pointer } from "../../../assets/img/corner-down-right.svg";
import "../../../theme/sharedStyles.scss";
import "./OderNumber.style.scss";

type Props = {
  orderNumber: number | string;
};

const OrderDate = ({ orderNumber }: Props) => {
  return (
    <div className="flex-center">
      <div>{orderNumber}</div>
      <div>
        <Pointer className="pointer" />
      </div>
    </div>
  );
};

export default OrderDate;
