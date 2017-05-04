$(function() {
  populateBox('#js-goals-total', function () {
    return data.reduce(function (acc, match) {
      return acc + match.goals_against + match.goals_for;
    }, 0);
  });
  populateBox('#js-goals-for', function () {
    return data.reduce(function (acc, match) {
      return acc + match.goals_for;
    }, 0);
  });
  populateBox('#js-goals-against', function () {
    return data.reduce(function (acc, match) {
      return acc + match.goals_against;
    }, 0);
  });
});
