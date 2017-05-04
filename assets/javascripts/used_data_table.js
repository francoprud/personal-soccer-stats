var populateData = function (documentElement) {
  var sortedData = data.sort(function (a, b) {
    return moment(a.date, 'DD/MM/YYYY') - moment(b.date, 'DD/MM/YYYY');
  });
  sortedData.forEach(function (item) {
    var clone = $('#js-match-row-clone').clone(true);
    clone.removeClass("hidden");
    if (item.goals_for > item.goals_against) {
      clone.addClass("won");
    } else if (item.goals_for < item.goals_against) {
      clone.addClass("lost");
    } else {
      clone.addClass("draw");
    }
    $(documentElement).append(clone);
    $(".date").last().append(item.date);
    var condition = item.condition == "home" ? "Local" : "Visitante";
    $(".condition").last().append(condition);
    $(".time").last().append(item.time);
    $(".field").last().append(item.field);
    $(".rival").last().append(item.rival);
    $(".result").last().append(item.goals_for + " - " + item.goals_against);
  })
}

$(function() {
  populateData('#js-used-data');
});
