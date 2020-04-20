module.exports = function formatMoviesRatings(moviesRated, ids) {
  renameKeys = (keysMap, obj) =>
    Object.keys(obj).reduce(
      (acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: obj[key] },
      }),
      {}
    );

  moviesFinal = moviesRated.map((item, index) => {
    ratingObjects = item.moviesRated.map((item) => {
      aux = renameKeys({ rating: item.movieID }, item);
      delete aux.movieID;
      aux1 = [];
      aux1 = [...aux1, ...Object.keys(aux)];
      aux1 = [...aux1, ...Object.values(aux)];
      return aux1;
    });

    item.moviesRated = Object.fromEntries(new Map(ratingObjects));

    aux = renameKeys({ moviesRated: ids[index]._id }, item);

    aux1 = [];
    aux1 = [...aux1, ...Object.keys(aux)];
    aux1 = [...aux1, ...Object.values(aux)];

    return aux1;
  });

  return Object.fromEntries(new Map(moviesFinal));
};
