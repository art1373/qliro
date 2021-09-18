import React from "react";

type Props = {
  amount: number;
  currency: string;
};

const OrderAmount = ({ amount, currency }: Props) => {
  return (
    <div>
      {amount} {currency}
    </div>
  );
};

export default OrderAmount;
