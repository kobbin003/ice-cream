import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("should update scoop subtotal when scoops selection change", async () => {
  render(<Options optionType="scoops" />);

  // make sure total starts out from $0.00
  const scoopSubtotal = screen.getByText(/scoops total: $/i);
  expect(scoopSubtotal).toHaveTextContent("0.00");
  // update vanilla scoops to 1 and check the subtotal
  const numberOfVanilla = await screen.findByRole("spinbutton", {
    name: /vanilla/i,
  });
  userEvent.clear(numberOfVanilla);
  userEvent.type(numberOfVanilla, "1");
  expect(scoopSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check the subtotal
  const numberOfChocolate = await screen.findByRole("spinbutton", {
    name: /chocolate/i,
  });
  userEvent.clear(numberOfChocolate);
  userEvent.type(numberOfChocolate, "2");
  expect(scoopSubtotal).toHaveTextContent("6.00");
});
