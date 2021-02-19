import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("displays image for each scoop from server", async () => {
  render(<Options optionType="scoops" />);
  //   expect(screen.getByText(/mint chip/i)).toBeInTheDocument();

  /** asynchronous-rendering-test: use find and await */
  // find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // get imges altText
  const altTexts = scoopImages.map((image) => image.alt);
  expect(altTexts).toEqual(["Mint Chip scoop", "Vanilla scoop"]);
});
