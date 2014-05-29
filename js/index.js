function renderSkills(){
        width = $("#skills").width(),
        barHeight = 35;

    var xScale = d3.scale.linear().range([0, width]);

    var graph = d3.select("#skills")
        .append("svg")
        .attr("id", "chart")
        .attr("width", width)

    d3.csv("../data/skills.csv", type, function(error, data){
        xScale.domain([0, d3.max(data, function(d){
            return d.level;
        })]);

        graph.attr("height", barHeight * data.length);

        var bar = graph.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i){
                return "translate(0," + i * barHeight + ")";
            });

        bar.append("rect")
            .attr("transform", function(d){
                return "translate(" + (width - xScale(d.level)) + ",0)";
            })
            .attr("height", barHeight - 5)
            .attr("width", function(d){
                return xScale(d.level);
            });

        bar.append("text")
            .attr("y", barHeight / 2)
            .attr("x", function(d){
                return (width + 10) - xScale(d.level);
            })
            .attr("dy", ".25em")
            .text(function(d){
                return d.name;
            });
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
