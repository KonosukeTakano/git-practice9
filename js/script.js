/*
PIE CHART
================================================ */
var pieData = {
    labels:['Webデザイナー','Webデベロッパー','サーバーエンジニア','営業職'],
    series:[14, 9, 8, 6]
};

var pieOptions = {
    width :'100%',
    height:'440px'
};

new Chartist.Pie('.pie-chart',pieData,pieOptions);