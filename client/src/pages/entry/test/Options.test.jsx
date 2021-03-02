import { render, screen } from "@testing-library/react";
import CustomOrderDetailProvider from "../../../contexts/OrderDetails";
import Options from "../Options";

test("displays image for each scoop from server", async () => {
  render(<Options optionType="scoops" />, {
    wrapper: CustomOrderDetailProvider,
  });
  //   expect(screen.getByText(/mint chip/i)).toBeInTheDocument();

  /** asynchronous-rendering-test: use find and await */
  // find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // get imges altText
  const altTexts = scoopImages.map((image) => image.alt);
  expect(altTexts).toEqual(["Mint Chip scoop", "Vanilla scoop"]);
});

test("should display images for each topings from the server", async () => {
  render(<Options optionType="toppings" />, {
    wrapper: CustomOrderDetailProvider,
  });

  //find images
  const toppingsImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(2);
  // toppingsImages.forEach((image) => console.log(image));

  // get images text
  const toppingsAltTexts = toppingsImages.map((image) => image.alt);
  expect(toppingsAltTexts).toEqual(["Hot fudge topping", "Mochi topping"]);
});
