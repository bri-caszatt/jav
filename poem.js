// Part 1: Define the extra information section for the poem
$("#info").html("<p></p>");

//Part 2: Display the first line of the poem and access info from the poem object if it exists
$.getJSON("poem.json", function(data) { // data variable is the JSON object
let poemText; // Define a new variable to hold all the text.
poemText = "<blockquote><p>"; // Open the starting tags
// Now you can iterate (map) over the data variable's .lines property;
data.lines.map(function(line){
    // Define a blank lineText.
    let lineText = "";
    // Now iterate over each word.
    line.map(function(word){
        let wordString;
        if (word.text) {
        wordString = word.text;
        };
        if (word.info){
            wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
        };
        if (word.link) {
            wordString = "<a href='#' data-info='" + word.info + "' data-link='" + word.link + "'>" + word.text + "</a>";
        };
        lineText = lineText + wordString + " "; // Add the word to the lineText variable with spacing
    });
    // Add lineText with a line break to the poemText
    poemText = poemText + lineText + "<br/>";
});
// Close the poemText tags
poemText = poemText + "</p></blockquote>";
// Replace the content of the #poem
$("#poem").html(poemText);
// Now that we have the data, we can add the click event to the poem
$("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo, clickedLink;
    clickedWord = $( this ).text();
    // .data("info") looks for the data-info HTML attribute
    clickedInfo = $( this ).data("info");
    clickedLink = $( this ).data("link") || "";
    let wholeLink = "<a href='" + clickedLink + "'>" + clickedInfo + "</a>";
    infoText = clickedInfo + clickedLink;
    $("#info").html(wholeLink);
});
}); // Close the getJSON method and callback function