// api key hEBByAJLq8AXGnx7ep9Yog2Dy33dSvRu


var topicArray = [];

function beholdTheGifs(topic) {
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        

        var results = response.data
        for (var i = 0; i < results.length; i++) {
            var topicDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var topicImage = $("<img>")
            
            


            topicImage
            .attr("src", results[i].images.fixed_height.url)
            .attr("data-still", results[i].images.original_still.url)
            .attr("data-animate", results[i].images.fixed_height.url);
            topicDiv.append(p);
            topicDiv.append(topicImage);
            $("#imagesTarget").prepend(topicDiv);
        }
    })
}

$("#addTopic").on("click", function (event) {
    (event).preventDefault();
    var inputTopic = $("#topicInput").val().trim();
    
    beholdTheGifs (inputTopic);
   
    var buttonDiv = $("<div>");
    var newButton = $("<button/>", 
        {
            text: inputTopic,
        });
    buttonDiv.append(newButton);
    $("#buttonTarget").prepend(buttonDiv);
})

$(".gif").on("click", function() {
    
    var state = $(this).attr("data-state");
  
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

