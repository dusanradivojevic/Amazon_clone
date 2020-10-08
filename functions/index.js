const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQCQPLRyFZ4PPsByhfoyKgDKMjLJo5bjjDY9suE1crIms1a1B8iSZQdeNPNyYwZT78nd8kE318emZ7RjkA4lX7F00UmhfbXbJ"
);

// App config
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: true }));

// Routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment received! Amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // 201 => Ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commands
exports.api = functions.https.onRequest(app);
