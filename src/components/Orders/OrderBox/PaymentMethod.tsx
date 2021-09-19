import * as React from "react";
import { ReactComponent as Qliro } from "../../../assets/img/Qliro.svg";
import { ReactComponent as Trustly } from "../../../assets/img/Trustly.svg";
import PayPal from "../../../assets/img/Paypal.png";
import AMEX from "../../../assets/img/AMEX.png";
import Visa from "../../../assets/img/VISA.png";
import "../../../theme/sharedStyles.scss";

type Props = {
  payment: string;
  testId: string;
};

const PaymentMethod = ({ payment, testId }: Props) => {
  const getPayment = (payment: string) => {
    switch (payment) {
      case "invoice":
        return <Qliro className="flag" style={{ width: 25, height: 25 }} />;
      case "paypal":
        return <img className="pay-icons" src={PayPal} alt="PayPal" />;
      case "visa":
        return <img className="pay-icons" src={Visa} alt="Visa" />;
      case "american express":
        return <img className="pay-icons" src={AMEX} alt="AMEX" />;
      case "trustly":
        return <Trustly className="flag" />;

      default:
        return null;
    }
  };
  return (
    <div className="flex-center" data-testid={testId}>
      <div>{getPayment(payment)}</div>
      <div className="customPadding">
        <h5>{payment}</h5>
      </div>
    </div>
  );
};

export default PaymentMethod;
