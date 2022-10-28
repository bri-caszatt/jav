// .map() is an important method.
// Get a little practice in by writing a new function that takes an array of integers
// and, using .map(), returns an array of those integers, doubled.
// So if we give it [1, 2, 3], we receive, in turn, [2, 4, 6]. Display this info in the console.


let myArray = [1, 2, 3]
let squaredArray = []
squaredArray = myArray.map(function(num) {
  return num**2;
});
console.log(squaredArray);

//this works, returns [1,4,9]

//for the last challenge, can you inlcude html code as an object of the array?

// {"text": "What", "info": "Anaphora: The repetition of a word or phrase at the beginning of (usually successive) lines. For example, the use of <q>What</q> in the first four lines."},

//{"text": "What", "info": "Anaphora: The repetition of a word or phrase at the beginning of (usually successive) lines. For example, the use of <q>What</q> in the first four lines. <a href=https://en.wikipedia.org/wiki/Anaphora_(rhetoric)'>Learn more</a>."},