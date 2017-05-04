var pieChartMatchesData = function () {
  var won = data.filter(function (match) {
    return match.goals_for > match.goals_against;
  }).length;
  var draw = data.filter(function (match) {
    return match.goals_for === match.goals_against;
  }).length;
  var lost = data.filter(function (match) {
    return match.goals_for < match.goals_against;
  }).length;
  return [
    ['Partidos ganados', won],
    ['Partidos empatados', draw],
    ['Partidos perdidos', lost]
  ];
};

var pieChartGoalsData = function () {
  var goalsFor = data.reduce(function (acc, match) {
    return acc + match.goals_for;
  }, 0);
  var goalsAgainst = data.reduce(function (acc, match) {
    return acc + match.goals_against;
  }, 0);
  return [
    ['Goles a favor', goalsFor],
    ['Goles en contra', goalsAgainst]
  ];
};

var generatePieChart = function (data, documentElement) {
  var pieChart = c3.generate({
    data: {
      columns: data,
      type: 'pie'
    },
    bindto: documentElement
  });
};

$(function() {
  generatePieChart(pieChartMatchesData(), '#js-total-matches-pie-chart');
  generatePieChart(pieChartGoalsData(), '#js-total-goals-pie-chart');
});
