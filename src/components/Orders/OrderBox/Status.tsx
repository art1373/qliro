import React from "react";
import "../../../theme/sharedStyles.scss";

type Props = {
  paymentStatus: string;
  testId: string;
};

enum PayStauts {
  PAID = "paid",
  PROGRESS = "in progress",
  FAILED = "failed",
}

const Status = ({ paymentStatus, testId }: Props) => {
  const circleRenderer = (payStatus: string) => {
    switch (payStatus) {
      case PayStauts.PAID:
        return <div className="circle paid" data-testid="status-elipse" />;

      case PayStauts.PROGRESS:
        return <div className="circle progress" data-testid="status-elipse" />;

      case PayStauts.FAILED:
        return <div className="circle failed" data-testid="status-elipse" />;

      default:
        return <div className="circle progress" data-testid="status-elipse" />;
    }
  };

  return (
    <div className="flex-center" data-testid={testId}>
      {circleRenderer(paymentStatus)}
      <div className="customPadding">{paymentStatus}</div>
    </div>
  );
};

export default Status;
