var timeseriesMatchesChart = function () {
  var sortedData = data.sort(function (a, b) {
    return moment(a.date, 'DD/MM/YYYY') - moment(b.date, 'DD/MM/YYYY');
  });
  var dates = sortedData.map(function (match) {
    return match.date;
  });
  var results = sortedData.map(function (match) {
    if (match.goals_for > match.goals_against) {
      return 1;
    } else if (match.goals_for < match.goals_against) {
      return -1;
    } else {
      return 0;
    }
  });
  dates.unshift('x');
  results.unshift('Resultados');
  return [
    dates,
    results
  ]
};

var timeseriesGoalsChart = function () {
  var sortedData = data.sort(function (a, b) {
    return moment(a.date, 'DD/MM/YYYY') - moment(b.date, 'DD/MM/YYYY');
  });
  var dates = sortedData.map(function (match) {
    return match.date;
  });
  var goals_for = sortedData.map(function (match) {
    return match.goals_for;
  });
  var goals_against = sortedData.map(function (match) {
    return match.goals_against;
  });
  dates.unshift('x');
  goals_for.unshift('Goles a favor');
  goals_against.unshift('Goles en contra');
  return [
    dates,
    goals_for,
    goals_against
  ]
};

var generateTimeseriesChart = function (data, index, documentElement) {
  var chart = c3.generate({
    data: {
      x: index,
      xFormat: '%d/%m/%Y',
      columns: data
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%d/%m/%Y'
        }
      },
      y: {
        label: 'Goles'
      }
    },
    bindto: documentElement
  });
};

var generateMatchesTimeseriesChart = function (documentElement) {
  var chart = c3.generate({
    data: {
      x: 'x',
      xFormat: '%d/%m/%Y',
      columns: timeseriesMatchesChart()
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%d/%m/%Y'
        }
      },
      y: {
        label: 'Resultado',
        tick: {
          values: [-1, 0, 1],
          format: function (d) {
            if (d == -1) {
              return 'Perdido';
            } else if (d == 1) {
              return 'Ganado';
            } else {
              return 'Empatado'
            }
          }
        }
      }
    },
    bindto: documentElement
  });
};

$(function() {
  generateTimeseriesChart(timeseriesGoalsChart(), 'x', '#js-total-goals-timeseries-chart');
  generateMatchesTimeseriesChart('#js-total-matches-timeseries-chart');
});
