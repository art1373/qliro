import React from "react";

type Props = {
  amount: number;
  currency: string;
  testId: string;
};

const OrderAmount = ({ amount, currency, testId }: Props) => {
  return (
    <div data-testid={testId}>
      {amount} {currency}
    </div>
  );
};

export default OrderAmount;
