const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');
const formatMoviesRatings = require('../utils/formaters');
const similarUsers = require('../utils/similarUsers');

module.exports = (app) => {
  app.get('/api/profile', requireLogin, async (req, res) => {
    const moviesRated = await User.aggregate(
      [{ $match: {} }, { $project: { _id: false, moviesRated: true } }],
      function (err, contacts) {
        // ...
      }
    );

    const ids = await User.aggregate(
      [{ $match: {} }, { $project: { _id: true } }],
      function (err, contacts) {
        // ...
      }
    );

    const moviesFinal = formatMoviesRatings(moviesRated, ids);

    res.send(
      similarUsers(
        moviesFinal,
        req.user.id,
        Object.keys(moviesFinal).length - 1
      )
    );
  });
};
