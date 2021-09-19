import * as React from "react";
import "./style.scss";
import { ReactComponent as EmailPhone } from "../../assets/img/EmailPhone.svg";
import { ReactComponent as Shipping } from "../../assets/img/Shipping.svg";
import { ReactComponent as Invoice } from "../../assets/img/Invoice.svg";

const Info = () => {
  return (
    <>
      <div className="info-box">
        <div className="info-box-inner">
          <div className="title-icon">
            <EmailPhone className="icon" />
            <h4>Contact Anna</h4>
          </div>
          <p>anneanne@qliro.com</p>
          <p>+46721234567</p>
        </div>
        <div className="info-box-inner">
          <div className="title-icon">
            <Shipping className="icon" />
            <h4>Shipping address</h4>
          </div>
          <p>Qlirovägen 123</p>
          <p>12345 Stockholm, Sweden</p>
        </div>
        <div className="info-box-inner">
          <div className="title-icon">
            <Invoice className="icon" />
            <h4>Invoice Address</h4>
          </div>
          <p>Qlirovägen 123</p>
          <p>12345 Stockholm, Sweden</p>
        </div>
      </div>
      <div className="seperator" />
    </>
  );
};

export default Info;
