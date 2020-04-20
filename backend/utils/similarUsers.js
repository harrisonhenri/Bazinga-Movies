module.exports = function similarUsers(dataset, person, num_user) {
  var scores = [];

  var pearsonCorrelation = function (dataset, p1, p2) {
    var aux = {};
    for (item in dataset[p1]) {
      if (item in dataset[p2]) {
        aux[item] = 1;
      }
    }
    var numExistence = Object.keys(aux).length;

    if (numExistence == 0) return 0;
    //store the sum and the square sum of both p1 and p2
    //store the product of both
    var p1Sum = 0,
      p2Sum = 0,
      aux1 = 0,
      aux2 = 0,
      prod = 0;
    //calculate the sum and square sum of each data point
    //and also the product of both point
    for (var item in aux) {
      p1Sum += dataset[p1][item];
      p2Sum += dataset[p2][item];
      aux1 += Math.pow(dataset[p1][item], 2);
      aux2 += Math.pow(dataset[p2][item], 2);
      prod += dataset[p1][item] * dataset[p2][item];
    }
    var numerator = prod - (p1Sum * p2Sum) / numExistence;
    var st1 = aux1 - Math.pow(p1Sum, 2) / numExistence;
    var st2 = aux2 - Math.pow(p2Sum, 2) / numExistence;
    var denominator = Math.sqrt(st1 * st2);
    if (denominator == 0) return 0;
    else {
      var val = numerator / denominator;
      return val;
    }
  };

  for (var others in dataset) {
    if (others != person && typeof dataset[others] != 'function') {
      var val = pearsonCorrelation(dataset, person, others);
      var p = others;
      scores.push({ val: val, p: p });
    }
  }
  scores.sort(function (a, b) {
    return b.val < a.val ? -1 : b.val > a.val ? 1 : b.val >= a.val ? 0 : NaN;
  });
  var score = [];
  for (var i = 0; i < num_user; i++) {
    score.push(scores[i]);
  }

  differentMovies = [];

  for (item in dataset[score[0].p]) {
    if (!(item in dataset[person])) {
      differentMovies.push(item);
    }
  }

  return differentMovies;
};
