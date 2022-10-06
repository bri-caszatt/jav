// Try using alert to display the value for each of the items from the example
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray[0]);
alert(myArray[1]);
alert(myArray[2]);
alert(myArray[3]);
alert(myArray[4]);

// This changes the first value in the array from 1 to 'cat'
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray[0] = 'cat';
alert(myArray[0]);

// This adds 'cat' to the end of my array
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.push('cat');
alert(myArray[5]);

// This removes the last value from my array, and so will give 'undefined' as the output
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.pop();
alert(myArray[4]);

// Splice requirest two parameters: first parameter is the index number of the first value we want to start from and remove, and the second parameter is the number of values to remove in total.
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.splice(0, 2);
alert(myArray[0]); 
// returns 'dog'

// How to determine length of an array, in this case there are 5 items; length is a method, so requires the .
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray.length);

// index number starts with 0, but length value starts with 1

// length - 1 returns the last value in an array
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray[myArray.length - 1]);
alert(myArray[myArray.length - 2]);
alert(myArray[myArray.length - 3]);
alert(myArray[myArray.length - 4]);
alert(myArray[myArray.length - 5]);

// sort() method will alphabetize or sort from least to greatest
var myArray = ['c', 'b', 'a', 'e', 'd'];
myArray.sort();
alert(myArray); // returns ['a', 'b', 'c', 'd', 'e']

var myArray = [2, 4, 3, 1, 5];
myArray.sort();
alert(myArray); // returns [1, 2, 3, 4, 5]

var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.sort();
alert(myArray); // returns 1,1,2,3,2,dog,true, so it took my array within an array out of itself, numbers first, strings second
alert(myArray.length); // yet this still returns only 5 as the answer

var myArray = [false, 1, 2, 'dog', true, ['cat', 2, 'pig', 4]];
myArray.sort();
alert(myArray); // 1,2,cat,2,pig,4,dog,false,true

var myArray = ["false", "poop", "cat", "zamboni", "true", true, false];
myArray.sort();
alert(myArray); // cat,false,false,poop,true,true,zamboni

// this for loop will return each item in the array in order
var myArray = [1, 2, 'dog', true, [1,2,3]];
for (var i = 0; i < myArray.length; i++) {
  alert(myArray[i]);
}

// while loop returns an output until the condition is met
var i = 0;
while (i < 5) {
  alert(i);
  i++;
} // returns 0, 1, 2, 3, 4 (individually)

// LIBRARY APP
var bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant of Wildfell Hall',
    "Lady Chatterley's Lover",
];

bookTitles.sort();
var libRequests = [];
var requestedTitle = "";

alert("Welcome to the library!\n\nPlease search for a book title when prompted.\n\nType `request` at the prompt to make a request for a book.\n\nYou can also type `display` at the prompt to display all available book titles.\n\nType `quit` at the prompt to quit the program.");

var response = "";
while (response != 'quit') {
    response = prompt("Search for a book title or make a request by typing 'request': ");
    // check if the user wants to make a request
    if (response == 'request') {
        requestedTitle = prompt("What book would you like to request? ");
        libRequests.push(requestedTitle); // add the requested title to the library requests array
        alert("You have requested the following titles:" + libRequests + "."); // alert the user their requests
    }
    // check if the user wants to display all the titles
    else if (response == 'display') {
        for (var i = 0; i < bookTitles.length; i++) {
            alert(bookTitles[i]); // display all available book titles
            }
    }
    // otherwise, check if the book the user entered is in the library
    else {
        var bookIndex = bookTitles.indexOf(response);
        if (response != 'quit'){
            // if indexOf returns -1, the book the user entered is not in the library
            if (bookIndex == -1) {
                alert("Sorry, we don't have that book. You can always request it.");
            }
            else {
                alert("Yes, " + response + " is available to check out.");
            }
        }
    }
}

// Write a for loop that prints all even numbers from 0 to 100 to the console.
var num = 100;
for (var i = 0; i <= num; i += 2) {
    console.log(i);
} // this works; also you can delete var num = 100, and change to i <= 100

var num = 100;
for (var i = 0; i <= num; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
    else {
        ;
    } // empty else statement is implied if you just leave it off
} // this also works; also you can delete var num = 100, and change to i <= 100

// LIBRARY APP + toLowerCase
// Try improving the program using the toLowerCase method, which converts all the letters of a string to lowercase, to make the search parameters case insensitive. Hint: To match the two terms, you will want to perform the toLowerCase method both on the user's response as well as on each book title in the library. Try storing these results in new variables!
var bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant of Wildfell Hall',
    "Lady Chatterley's Lover",
];

bookTitles.sort();
var bookTitlesLower = bookTitles.toLowerCase();
var libRequests = [];
var requestedTitle = "";

alert("Welcome to the library!\n\nPlease search for a book title when prompted.\n\nType `request` at the prompt to make a request for a book.\n\nYou can also type `display` at the prompt to display all available book titles.\n\nType `quit` at the prompt to quit the program.");

var response = "";
var responseLower = response.toLowerCase();
while (responseLower != 'quit') {
    responseLower = prompt("Search for a book title or make a request by typing 'request': ");
    // check if the user wants to make a request
    if (responseLower == 'request') {
        requestedTitle = prompt("What book would you like to request? ");
        libRequests.push(requestedTitle); // add the requested title to the library requests array
        alert("You have requested the following titles:" + libRequests + "."); // alert the user their requests
    }
    // check if the user wants to display all the titles
    else if (responseLower == 'display') {
        for (var i = 0; i < bookTitlesLower.length; i++) {
            alert(bookTitlesLower[i]); // display all available book titles
            }
    }
    // otherwise, check if the book the user entered is in the library
    else {
        var bookIndex = bookTitlesLower.indexOf(responseLower);
        if (responseLower != 'quit'){
            // if indexOf returns -1, the book the user entered is not in the library
            if (bookIndex == -1) {
                alert("Sorry, we don't have that book. You can always request it.");
            }
            else {
                alert("Yes, " + responseLower + " is available to check out.");
            }
        }
    }
}
    

// from Patricia
var bookLower = [];
for (var i = 0; i < bookTitles.length; i++) {
    bookLower.push(bookTitles[i].toLowerCase());
}