

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  try {
    const total = parseInt(req.query.total);
    if (isNaN(total) || total <= 0) {
      return res.status(400).json({
        message: "Total must be greater than zero",
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    console.log(paymentIntent);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret, // Corrected key
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

exports.api = onRequest(app);
