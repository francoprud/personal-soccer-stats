$(function() {
  populateBox('#js-matches-played', function () {
    return data.length;
  });
  populateBox('#js-won-matches', function () {
    return data.filter(function (match) {
      return match.goals_for > match.goals_against;
    }).length;
  });
  populateBox('#js-drawn-matches', function () {
    return data.filter(function (match) {
      return match.goals_for === match.goals_against;
    }).length;
  });
  populateBox('#js-lost-matches', function () {
    return data.filter(function (match) {
      return match.goals_for < match.goals_against;
    }).length;
  });
});
