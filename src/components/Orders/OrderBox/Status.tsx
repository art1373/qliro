import React from "react";
import "../../../theme/sharedStyles.scss";

type Props = {
  paymentStatus: string;
};

const Status = ({ paymentStatus }: Props) => {
  const circleRenderer = (payStatus: string) => {
    switch (payStatus) {
      case "paid":
        return <div className="circle paid" />;

      case "in progress":
        return <div className="circle progress" />;

      case "failed":
        return <div className="circle failed" />;

      default:
        return <div className="circle progress" />;
    }
  };

  return (
    <div className="flex-center">
      {circleRenderer(paymentStatus)}
      <div className="customPadding">{paymentStatus}</div>
    </div>
  );
};

export default Status;
