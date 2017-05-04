var generateTimeBarChart = function (documentElement) {
  var chart = c3.generate({
    data: {
        x: 'x',
        rows: [
            ['x', 'Ganados', 'Empatados', 'Perdidos'],
            ['10:00', 5, 1, 1],
            ['12:00', 3, 0, 3],
            ['14:00', 3, 1, 1],
            ['16:00', 7, 0, 5]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
      x: {
        type: 'category',
        show: true,
        height: 70
      }
    },
    bindto: documentElement
  });
};

$(function() {
  generateTimeBarChart('#js-times-bar-chart');
});
