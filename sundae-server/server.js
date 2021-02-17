const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

// CORS for react app, assuming port 3000:
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// // use middleware to serve static images:
const folderToServe = path.join(__dirname, "public");
app.use(express.static(folderToServe));
console.log("dirname", __dirname);

// read data from options file:
const sundaeOptionsRaw = fs.readFileSync(
  path.resolve(__dirname, "sundaeOptions.json")
);
const sundaeOptions = JSON.parse(sundaeOptionsRaw);
// using js instead of json file.
// const sundaeOptions = require("./sundaeOptions.js");
console.log(sundaeOptions);
// console.log(sundaeOptionsRaw);

// Routes
app.get("/scoops", (req, res) => {
  res.json(sundaeOptions.iceCreamFlavors);
});

app.get("/toppings", (req, res) => {
  res.json(sundaeOptions.toppings);
});

app.post("/order", (req, res) => {
  // create a random order-number
  const orderNumber = Math.floor(Math.random() * 10000000000);

  res.status(201);
  res.json({ orderNumber });
});

// listen to port 3000
app.listen(3030, () => console.log("App is listening on Port no. 3030"));

// export app
module.exports = app;
