const mongoose = require('mongoose');
const { Schema } = mongoose;
const movieRatingSchema = require('./MovieRating');

const userSchema = new Schema({
  googleId: String,
  moviesRated: [movieRatingSchema],
});

mongoose.model('users', userSchema);
