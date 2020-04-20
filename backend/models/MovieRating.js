const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieRatingSchema = new Schema(
  {
    movieID: { type: String },
    rating: { type: Number },
  },
  { _id: false }
);

module.exports = movieRatingSchema;
