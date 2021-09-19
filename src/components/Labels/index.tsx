import * as React from "react";
import "./style.scss";

const Labels = () => {
  return (
    <>
      <div className="order-help">
        <p>Anne's Orders</p>
        <div
          className="help"
          onClick={() =>
            window.open("https://career.qliro.com/connect", "_blank")
          }
        >
          <b>i</b>
          <p>Help</p>
        </div>
      </div>
      <div className="label-wrap">
        <p>Order Number</p>
        <p>Created</p>
        <p>Store</p>
        <p>Payment Method</p>
        <p>Payment Status</p>
        <p>Amount</p>
      </div>
    </>
  );
};

export default Labels;
