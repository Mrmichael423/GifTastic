var topics = ["Kevin Hart", "Dave Chappelle", "Tim Allen", "Eddie Murphy", "George Carlin", "Robin Williams", "Rodney Dangerfield", "Chris Rock", "Will Ferrell", "Bill Cosby"]
console.log(topics)

function renderButtons() {
    console.log(renderButtons)
    $("#buttons").empty();

    for(var i = 0; i< topics.length; i++){
        
        var gif = $("<button>");
        gif.addClass("comic");
        gif.attr("data-name", topics[i]);
        gif.text(topics[i]);
        $("#buttons").append(gif);
    }
}

$("#add-gif").on("click", function(event){
    event.preventDefault();
    var newGif = $("#gif-input").val().trim();
    topics.push(newGif);
    renderButtons();
})
$("#buttons").on("click", ".comic", function() {
    var search = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    console.log(search)
    $("#images").empty()
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var results = response.data

        for(var i = 0; i < results.length; i++){
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var h3 = $("<h3>").text("Rating: " + rating);

            var image = $("<img>");
            image.attr({
                src: results[i].images.fixed_height_still.url,
                "data-still": results[i].images.fixed_height_still.url,
                "data-animate": results[i].images.fixed_height.url,
                "data-state": "still"
        });
            image.addClass("pick")
            gifDiv.append(h3);
            gifDiv.append(image);

            $("#images").append(gifDiv);
        }
    })
})
    $("#images").on("click", ".pick", function(){
        console.log($(this))
        var state = $(this).attr("data-state");
        var stillUrl = $(this).attr("data-still");
        var animateUrl = $(this).attr("data-animate");
        
        if (state === "still") {
            $(this).attr("src", animateUrl);
            $(this).attr("data-state", "animate");
            
        } else if (state === "animate") {
            $(this).attr("src", stillUrl);
            $(this).attr("data-state", "still")
            
        }
    })
    


renderButtons()