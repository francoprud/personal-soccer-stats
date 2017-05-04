var generateMatchesStackedChart = function (documentElement) {
  var chart = c3.generate({
      data: {
          x: 'x',
          rows: [
              ['x', 'Ganados', 'Empatados', 'Perdidos'],
              ['AFFAIRE PLAY', 0,	1,	0],
              ['BANKAME CON LA GORDA', 1,	0,	0],
              ['CORTA EL PASTO', 1,	0,	0],
              ['EL CASCO F.C.',	0,	0,	1],
              ['ELVIRA FC',	1,	0,	1],
              ['ESPINOSA F.C.',	1,	0,	0],
              ['FULLMONTY FC',	0,	0,	1],
              ['JUPITER 449',	1,	0,	0],
              ['LA VIEJA',	1,	0,	0],
              ['LOS CHUPACABRAS',	1,	0,	0],
              ['MERCADERES DE LA MUERTE F.C.', 2,	0,	0],
              ['OBELIX', 1, 0, 0],
              ['PANZUDA FC',	1,	0,	0],
              ['PARTUFLOYD F.C', 1, 0, 0],
              ['PELICANOS A.C.', 1,	0,	0],
              ['PORTO BELO',	1,	0,	0],
              ['SANGUCHE DE MILAN',	0,	1,	0],
              ['SAQUE COLOMBIA',	1,	0,	1],
              ['SILENCIO STAMPA',	0,	0,	1],
              ['SPORTIVO LARISSA',	0,	0,	2],
              ['SUBURBIOS F.C.',	1,	0,	0],
              ['TECHO 2',	1,	0,	0],
              ['VAFFANCULO FC',	0,	0,	1],
              ['WINE IN CARTOON',	0,	0,	2],
              ['Y BIEN AMIGUEZ',	1,	0,	0]
          ],
          type: 'bar',
          groups: [
              ['Ganados', 'Empatados', 'Perdidos']
          ]
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
  generateMatchesStackedChart('#js-matches-stacked-chart');
});
