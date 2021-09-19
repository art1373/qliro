import { render } from "@testing-library/react";
import { MockOrder as order } from "../../../utils/fixture";
import OrderBox from "./index";

describe("Order Box Tests", () => {
  it("should render boxe with all the children", () => {
    const { getByTestId } = render(<OrderBox order={order} />);
    const tagExists = getByTestId("order-box-tag");
    const orderNumberExists = getByTestId("order-box-number");
    const dateExists = getByTestId("order-box-date");
    const orderBoxStoreExists = getByTestId("order-box-store");
    const paymentMethodExists = getByTestId("order-box-pay-method");
    const orderBoxExists = getByTestId("order-box-status");
    const amountExists = getByTestId("order-box-amount");
    expect(tagExists).toBeTruthy();
    expect(orderNumberExists).toBeTruthy();
    expect(dateExists).toBeTruthy();
    expect(orderBoxStoreExists).toBeTruthy();
    expect(paymentMethodExists).toBeTruthy();
    expect(orderBoxExists).toBeTruthy();
    expect(amountExists).toBeTruthy();
  });

  it("render correct amount and currency", () => {
    const { getByText } = render(<OrderBox order={order} />);
    expect(getByText(`${order.amount} ${order.currency}`)).toBeTruthy();
  });

  it("renders correct payment status", () => {
    const { getByText } = render(<OrderBox order={order} />);
    expect(getByText("paid")).toBeTruthy();
  });
});
