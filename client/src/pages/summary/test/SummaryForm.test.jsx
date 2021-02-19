import {
  screen,
  render,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm.jsx";

afterAll(cleanup);
describe("about summary form", () => {
  test("should have initially default checkbox and disabled button", () => {
    render(<SummaryForm />);

    expect(
      screen.getByRole("checkbox", { name: /I agree to Terms and Conditions/i })
    ).not.toBeChecked();

    expect(
      screen.getByRole("button", { name: /confirm order/i })
    ).toBeDisabled();
  });
  test("checking checkbox enable and disable the button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i,
    });

    userEvent.click(checkbox);
    const button = screen.getByRole("button", { name: /confirm order/i });
    expect(button).toBeEnabled();
    /** unchecking checkbox disables the button */
    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
  test("should popover when hovering on Terms and Conditions", async () => {
    render(<SummaryForm />);
    /** popover to be not visible */
    const popoverElement = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(popoverElement).not.toBeInTheDocument();

    const termsElement = screen.getByText(/terms and conditions/i);

    /** popover visible when we hover */
    // console.log(getByText(/I agree to Terms and Conditions/i));
    // fireEvent.mouseEnter(termsElement);
    userEvent.hover(termsElement);
    expect(
      screen.getByText(/No ice cream will actually be delivered/i)
    ).toBeInTheDocument();

    /** popover invisible when we unhover */
    userEvent.unhover(termsElement);
    // await waitFor(() =>
    //   expect(
    //     screen.queryByText(/no ice cream will actually be delivered/i)
    //   ).not.toBeInTheDocument()
    // );

    /* OR */
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
