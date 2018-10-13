// api key hEBByAJLq8AXGnx7ep9Yog2Dy33dSvRu

var topic = [];

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        searchInput + "&api_key=dc6zaTOxFJmzC&limit=10";


$("#begin").on("click", function () {
    console.log("Hello");
    $("#begin").addClass("hidden");
    $("#searchForm").removeClass("hidden");
    $("#searchButton").removeClass("hidden");
})

$("#searchButton").on("click", function() {
    
    console.log("click click boom");
})