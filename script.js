window.onload = function () {
    console.log("Code started running.");

    var svg = d3.select(".container")
        .append("svg")
        .style("background", "#eeeeee")
        .attr("width", "100%")
        .attr("height", "100%");

    d3.csv("https://raw.githubusercontent.com/agonis21/ColorsD3js/main/data/colorhexa.csv",
        function(data) {
        console.log(data);

         
        var columns = data.columns;
        var rows = data.rows;

        //console.log(columns);
        //console.log(rows);

        svg.selectAll("rect")
            .data([10, 20, 30])
            .enter()
            .append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("x", 10)
            .attr("y", 20);

    });
}
