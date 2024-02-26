const { Router } = require("express");
const { getReviewsById } = require('../../controllers/Reviews/getReviewByIdController');
const { createReviews } = require('../../controllers/Reviews/createReviewController');
const { getAllReviews } = require('../../controllers/Reviews/getAllReviewController');

const reviewsRouter = Router();

reviewsRouter.get("/:id", getReviewsById);
reviewsRouter.get("/", getAllReviews);
reviewsRouter.post("/", createReviews);

module.exports = { reviewsRouter };