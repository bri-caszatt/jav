// cmd + / will comment out text in any coding language (ctrl + / on Windows)

// This will ask the user's age and store it as a variable, then change the answer into an integer, then give the response in a sentence, and finally confirm that the number is an integer type (assuming they have put in a numeral to begin with and not a written-out number)
var userAge = prompt("How old are you?");
    userAge = parseInt(userAge);
    alert("You are " + userAge + " years old.");
    typeof userAge;

// This will ask the user's age, store it as a variable, change the answer to an integer, and give a prompt based on the response
    var userAge = prompt("How old are you?");
    userAge = parseInt(userAge);
    if (userAge >= 18) {
        alert("You are legally old enough to vote in the U.S.");
    } else {
        alert("You are not legally old enough to vote in the U.S.");
    }

// Same as above, except with more possible alerts
var userAge = prompt("How old are you?");
    userAge = parseInt(userAge);

    if (userAge >= 18) {
        alert("You are legally old enough to vote and drive in the U.S.");
    } else if (userAge >= 16) {
        alert("You are not old enough to vote, but you are old enough to drive in the U.S.");
    } else {
        alert("You are not legally old enough to vote or drive in the U.S.");
    }

// This asks users to select a difficulty level, stores the answer as a variable, and then confirms the response; the default answer is given if the user doesn't make valid input.   
var difficulty = prompt("What difficulty would you like to play? 1- Easy, 2- Medium, 3- Hard");
    switch (difficulty) {
        case "1":
            alert("You have selected the Easy difficulty.");
            break;
        case "2":
            alert("You have selected the Medium difficulty.");
            break;
        case "3":
            alert("You have selected the Hard difficulty.");
            break;
        default:
            alert("Invalid entry.");
            break;
    }

// Choose Your Own Adventure Game
var playerName, playerChoice;

    var playerName = prompt("What is your name?");
    alert("Welcome, " + playerName + "!");

    alert(playerName + ", you are the last person on earth, sitting alone in a room. There is a knock on the door... What will you do?");
    playerChoice = prompt("Enter 1 to cautiously approach the door. Enter 2 to hide under the table.");
    if (playerChoice == "1"){
        alert("Your hands are trembling as you approach the door. You pause a moment before it.");
        playerChoice = prompt("Enter 1 to bravely open the door. Enter 2 to look through the door's peephole.");
        if (playerChoice == "1"){
            alert("You swing the door open with courageous gusto.")
        }
        else if (playerChoice == "2"){
            alert("You cautiously look through the peephole. You make out a vague shape looming before the door.")
        }
        else {
            alert("Invalid entry.");
        }
    } else if (playerChoice == "2"){
        alert("As you hide under the table you hear the doorknob rattling.");
        playerChoice = prompt("Enter 1 to stay hidden under the table. Enter 2 to get up and find a weapon to defend yourself with.");
        if (playerChoice == "1"){
            alert("Whatever is at the door has now begun banging on it loudly.");
        }
        else if (playerChoice == "2"){
            alert("You quickly but quietly get up and look around. You see a broom in the corner of the room and wield it mightily.");
        }
        else {
            alert("Invalid entry.");
        }
    }
    else {
        alert("Invalid entry.");
    }

// Write a program that has the user input a number. If the number is even, alert "The number is even." If the number is odd, alert "The number is odd."
var num = prompt("Please enter a numeral.");
num = parseInt(num);
    if (num % 2 == 0){
        alert("The number is even.");
    }
    else {
        alert("The number is odd.");
    }

// Utilizing switch statements, write a short Choose Your Own Adventure story that allows the player 3 choices to choose from at a time.
var response = prompt("Which adventure do you want? 1- Hiking, 2- Slaying Vampires, 3- Swimming");
    switch (response) {
        case "1":
            alert("You have selected the Hiking adventure.");
            break;
        case "2":
            alert("You have selected the Slaying Vampires adventure.");
            break;
        case "3":
            alert("You have selected the Swimming adventure.");
            break;
        default:
            alert("Invalid entry.");
            break;
    }