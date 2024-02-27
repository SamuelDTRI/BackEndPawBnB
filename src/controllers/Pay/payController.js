require("dotenv").config();
const { Stripe } = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createSession = async (req, res) => {
  const { productPrice } = req.body; // Asume que el precio del producto viene en el cuerpo de la solicitud

  let lineItem;

  switch (productPrice) {
    case 10:
      lineItem = {
        price_data: {
          product_data: {
            name: "Reserva",
            description: "¡Reserva Para Tu Mascota En PawBnB!",
          },
          currency: "usd",
          unit_amount: 1000, // 10 usd
        },
        quantity: 1,
      };
      break;
    case 20:
      lineItem = {
        price_data: {
          product_data: {
            name: "Reserva",
            description: "¡Reserva Para Tu Mascota En PawBnB!",
          },
          currency: "usd",
          unit_amount: 2000, // 20 usd
        },
        quantity: 1,
      };
      break;
    case 30:
      lineItem = {
        price_data: {
          product_data: {
            name: "Reserva",
            description: "¡Reserva Para Tu Mascota En PawBnB!",
          },
          currency: "usd",
          unit_amount: 3000, // 30 usd
        },
        quantity: 1,
      };
      break;
    default:
      return res.status(400).json({ error: "Precio del producto inválido" });
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [lineItem],
    mode: "payment",
    success_url: "https://front-end-paw-bn-b.vercel.app/PaySuccess",
    cancel_url: "https://front-end-paw-bn-b.vercel.app/payCancel",
  });

  return res.json(session);
};

module.exports = { createSession };

//success_url: "https://front-end-paw-bn-b.vercel.app/PaySuccess",
//cancel_url: "https://front-end-paw-bn-b.vercel.app/payCancel",
