var topics = ["Kevin Hart", "Dave Chappelle", "Tim Allen", "Eddie Murphy", "George Carlin", "Robin Williams", "Rodney Dangerfield", "Chris Rock", "Will Ferrell", "Bill Cosby"]

function renderButtons() {
    $("#buttons").empty();

    for(var i = 0; i< topics.length; i++){
        
        var gif = $("<button>");
        gif.addClass("comic");
        gif.attr("data-name", topics[i]);
        gif.text(topics[i]);
        $("#buttons").append(gif);
    }
}
renderButtons()
console.log(topics)
console.log(renderButtons)






var queryUrl = "https://api.giphy.com/v1/gifs/" + search + "?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit:10";
var search = "";