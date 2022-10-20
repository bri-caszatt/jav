// alert('My project is going to be awesome!');

$("#noShow").hide();
$("h1").html("The Best Jokes Ever!");

$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta!</p>");

//modify css styles for the jokes button
$("#toggleJokes").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px",
    "cursor": "pointer"
});

//make button clickable
$("#toggleJokes").click(function() {
    $("#joke").toggle();
});

//prompt() the user whether the jokes on our page are good or bad.
//If the user responds with "bad", then change the header text to "The Worst Jokes Ever!".
//If the user responds with "good", keep the header text as "The Best Jokes Ever!".
$("#likeJokes").click(function() {
    let answer = prompt("Do you like my jokes? Please reply with 'good' if you like them or 'bad' if you don't.");
        if (answer == "good") {
            alert("Thank you!");
        } else if (answer == "bad") {
            $("h1").html("The Worst Jokes Ever!");
        } else {
            alert("I'm sorry, I didn't understand your reply. Please reply with 'good' or 'bad'.");
        prompt("Do you like my jokes? Please reply with 'good' if you like them or 'bad' if you don't.");
    };
});

//Add a button to the page that will change the page's overall color scheme (background color, text color, etc.).
$("#changeColors").click(function() {
    $("body").css ("background-color", "pink");
    $(".formatText").css ("color", "yellow");
    $("#joke").css ("color", "yellow");
    $("#poem").css ("color", "yellow");
});