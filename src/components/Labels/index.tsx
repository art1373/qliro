import * as React from "react";
import "./style.scss";

const Labels = () => {
  return (
    <>
      <div className="order-help">
        <p>Anne's Orders</p>
        <div className="help">
          <b>i</b>
          <p>Help</p>
        </div>
      </div>
      <div className="label-wrap">
        <div className="inner">
          <p>Order Number</p>
          <p>Created</p>
          <p>Store</p>
          <p>Payment Method</p>
          <p>Payment Status</p>
          <p>Amount</p>
        </div>
      </div>
    </>
  );
};

export default Labels;
