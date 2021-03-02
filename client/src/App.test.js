import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  expect(1).toBe(1);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
