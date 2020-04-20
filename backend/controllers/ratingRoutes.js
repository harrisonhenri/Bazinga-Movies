const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/rating', async (req, res) => {
    const userMovies = await User.aggregate(
      [
        { $match: { _id: mongoose.Types.ObjectId(req.user.id) } },
        {
          $unwind: '$moviesRated',
        },
        { $project: { _id: false, movies: '$moviesRated.movieID' } },
      ],
      function (err, contacts) {
        // ...
      }
    );

    const userMoviesFinal = userMovies.map((item) => item.movies);
    res.send(userMoviesFinal);
  });

  app.post('/api/rating', requireLogin, async (req, res) => {
    await User.update(
      {
        _id: req.user.id,
      },
      { $push: { moviesRated: req.body } }
    );

    try {
      res.status(400);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
