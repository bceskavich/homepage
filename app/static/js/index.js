function renderSkills(){
        margin = {right: 150}
        width = $("#skills").width() - margin.right,
        barHeight = 35;

    var xScale = d3.scale.linear().range([0, width]);

    var graph = d3.select("#skills")
        .append("svg")
        .attr("id", "chart")
        .attr("width", width + margin.right)

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
            .attr("height", barHeight - 10)
            .attr("width", function(d){
                return xScale(d.level);
            });

        bar.append("text")
            .attr("y", barHeight / 2)
            .attr("x", function(d){
                return (width + 10);
            })
            .attr("dy", ".25em")
            .text(function(d){
                return d.name;
            });

        bar.append("text")
            .attr("class", "type")
            .attr("y", barHeight / 2)
            .attr("x", function(d){
                return (width + 5) - xScale(d.level);
            })
            .attr("dy", "0.05em")
            .text(function(d){
                return d.type;
            });
    });
}

function type(d){
    d.level = +d.level;
    return d;
}

$(function(){

    // Makes the navbar visible when the user begins scrolling past the landing
    // Also displays skills graph when scrolled past
    var height = $(window).height()
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

        if (scroll > (height - 100)){
            $('#skills').addClass('show');
        }
    });

    // Renders the skills graph -- not seen until scrolled past
    renderSkills();

    // From CSS-Tricks, a smooth scrolling addition for same-page anchors.
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
    });

});
