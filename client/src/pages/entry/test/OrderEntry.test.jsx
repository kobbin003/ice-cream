import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";

test.only("should show alert when there is error", async () => {
  /** reseting handler to deal with error */
  server.resetHandlers(
    rest.get("http:localhost:3030/scoops", (req, res, ctx) => {
      return res(
        // Send a valid HTTP status code
        ctx.status(500),
        ctx.json({
          errorMessage: "An unexpected error occurred. Please try again later",
        })
      );
    }),
    rest.get("http:localhost:3030/toppings", (req, res, ctx) => {
      return res(
        // Send a valid HTTP status code
        ctx.status(500),
        ctx.json({
          errorMessage: "An unexpected error occurred. Please try again later",
        })
      );
    })
  );
  render(<OrderEntry />);
  await waitFor(async () => {
    const alertItems = await screen.findAllByRole("alert");
    expect(alertItems).toHaveLength(2);
    // console.log(alertItems);
  });
  await waitFor(async () => {
    const alertContent = await screen.findAllByText(
      /An unexpected error occurred. Please try again later/i
    );
    // console.log(alertContent);
    expect(alertContent[0]).toBeInTheDocument();
    expect(alertContent[1]).toBeInTheDocument();
  });
});

test.skip("should not test", () => {});

/** How to isolate testing */
// test.only ---> to run this test only. & test.skip ---> to run every other test except this.
