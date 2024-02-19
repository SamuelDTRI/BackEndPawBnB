require("dotenv").config();
const { Stripe } = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: "Reserva",
            description: "Reserva para tu mascota",
          },
          currency: "usd",
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url:
      "http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/payment/cancel",
  });

  return res.json(session);
};

const getReceiptUrl = async (req, res) => {
  const sessionId = req.params.sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const paymentIntent = await stripe.paymentIntents.retrieve(
    session.payment_intent
  );

  return res.json({ receiptUrl: paymentIntent.charges.data[0].receipt_url });
};

module.exports = { createSession, getReceiptUrl };
