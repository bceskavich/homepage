function renderSkills(){
    var margin = {top: 20, bottom: 30}
        width = $("#skills").width(),
        height = 300;

    var xScale = d3.scale.ordinal().rangeRoundBands([0, width], .1);

    var yScale = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var graph = d3.select("#skills")
        .append("svg")
        .attr("id", "chart")
        .attr("width", width)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(0," + margin.top + ")");

    d3.csv("../data/skills.csv", type, function(error, data){
        xScale.domain(data.map(function(d){
            return d.name;
        }));
        yScale.domain([0, d3.max(data, function(d){
            return d.level;
        })]);

        var bar = graph.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i){
                return "translate(" + xScale(d.name) + ",0)";
            });

        bar.append("rect")
            .attr("y", function(d){
                return yScale(d.level);
            })
            .attr("height", function(d){
                return height - yScale(d.level);
            })
            .attr("width", xScale.rangeBand());

        graph.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + (height - 25) + ")")
            .call(xAxis);
    });
}

function type(d){
    d.level = +d.level;
    return d;
}

$(function(){

    // Makes the navbar visible when the user begins scrolling past the landing
    $(window).scroll(function(){
        var scroll = $(document).scrollTop()

        if (scroll >= 25) {
            $('nav').addClass('fixed');
            $('.nav-container').addClass('show');
        }
        else {
            $('nav').removeClass('fixed');
            $('.nav-container').removeClass('show');
        }
    });

    renderSkills();

});
