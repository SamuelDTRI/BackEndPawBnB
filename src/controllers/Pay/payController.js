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
          unit_amount: 1000, //10 usd
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/PaySuccess",
    cancel_url: "http://localhost:5173/payCancel",
  });

  return res.json(session);
};

module.exports = { createSession };
