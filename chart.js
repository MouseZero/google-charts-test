google.load("visualization", "1", {packages:["imagebarchart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['', 'Very Sat', 'Sat', 'Dis Sat', 'Very Dis Sat'],
    ['Overall Service',  25,50,15,10],
    ['Safty',            10,85,3,2]
  ]);

  var chart = new google.visualization.ImageBarChart(document.getElementById('chart_div'));

  chart.draw(data, {width: 400, height: 240, min: 0});
}
