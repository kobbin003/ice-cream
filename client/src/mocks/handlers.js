// src/mocks/handlers.js
import { rest } from "msw";
// import fs from "fs";
// const sundaeOptionsRaw = fs.readFileSync("/sundaeOptions.json");
// const sundaeOptions = JSON.parse(sundaeOptionsRaw);
export const handlers = [
  // Handles a GET /scoops request
  rest.get("http:localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Mint Chip",
          imagePath: "/images/mint-chip.png",
        },
        {
          name: "Vanilla",
          imagePath: "/images/vanilla.png",
        },
      ])
    );
  }),

  // Handles a GET/toppings request
  rest.get("http:localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png",
        },
        {
          name: "Mochi",
          imagePath: "/images/mochi.png",
        },
      ])
    );
  }),

  // Handle errors

  // // Handle a POST/order request
  // rest.post("http:localhost:3030/order", (req, res, ctx) => {
  //   return res(ctx.status(201), ctx.json({ orderNumber: 1 }));
  // }),
];
