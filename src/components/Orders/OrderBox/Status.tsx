import React from "react";
import "../../../theme/sharedStyles.scss";

type Props = {
  paymentStatus: string;
  testId: string;
};

const Status = ({ paymentStatus, testId }: Props) => {
  const circleRenderer = (payStatus: string) => {
    switch (payStatus) {
      case "paid":
        return <div className="circle paid" data-testid="status-elipse" />;

      case "in progress":
        return <div className="circle progress" data-testid="status-elipse" />;

      case "failed":
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
