//Using the JavaScript reference and/or Google, look into how you might do the following:
//Find the index of a substring within a string (like "dog" in "The dog jumped.").
let text = "The dog jumped.";
let result = text.indexOf("dog");
console.log(result); //result is 4 bc it is counting each character, 0, 1, 2, 3, 4 (for start of dog)

//Given an array of numbers (e.g., [40, 38, 37, 93, 55, 66], filter out any values that are less than 50.
let array = [40, 38, 37, 93, 55, 66];
let result2 = array.filter(checkNum);

function checkNum(num) {
    return num > 50; //yields [93, 55, 66]
};
console.log(result);

//Given a decimal number (like .36), round it up to the nearest whole number.
let a = Math.round(0.36);
console.log(a); //yields 0

//Create a random number between 1 and 100.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };
console.log(getRandomInt(100)); //works, on 4 tries all gave me an integer less than 100