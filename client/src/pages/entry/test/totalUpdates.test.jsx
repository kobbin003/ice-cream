import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import CustomOrderDetailProvider from "../../../contexts/OrderDetails";

test("should update scoop subtotal when scoops selection change", async () => {
  render(<Options optionType="scoops" />, {
    wrapper: CustomOrderDetailProvider,
  });
  // make sure total starts out from $0.00
  const scoopSubtotal = screen.getByText("Scoops total: $", { exact: false });
  // const scoopSubtotal = screen.getByText(/^scoops./i);
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the subtotal
  // const numberOfVanilla = await screen.findByRole("spinbutton");
  const numberOfVanilla = await screen.findByRole("spinbutton", {
    name: /vanilla/i,
  });
  userEvent.clear(numberOfVanilla);
  userEvent.type(numberOfVanilla, "1");
  expect(scoopSubtotal).toHaveTextContent(/2.00/i);

  // update chocolate scoops to 2 and check the subtotal
  const numberOfChocolate = await screen.findByRole("spinbutton", {
    name: /Mint Chip/i,
  });
  userEvent.clear(numberOfChocolate);
  userEvent.type(numberOfChocolate, "2");
  expect(scoopSubtotal).toHaveTextContent("4.00");
});
