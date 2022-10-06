// find the even numbers in an array; this first solution doens't work, it only yields 0
let someValues = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < someValues.length; i++) {
    if (someValues[i] / 2 == 0) {
        console.log(someValues[i]);
    }
}

// this changes /2 to %2 which correctly evaluates all numbers for 0 remainders (therefore even numbers)
let someValues = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < someValues.length; i++) {
    if (someValues[i] % 2 == 0) {
        console.log(someValues[i]);
    }
}


//Let's say you are writing a program that allows users to manage a collection of recipes.
//You want the user to be able to add, remove, edit, and search through their recipes.
//You also want the user to be able to "favorite" individual recipes and let them search and look through their list of favorites.
//Write some pseudo-code for a program that allows for each of these features.

//Start with an array of recipes
//Create an array within the array for "Favorite Recipes"
//Write a function to add recipes, using push() method
//Write a function to remove recipes, using the splice() method
//Write a function to edit a recipe--editing can mean so many things, the title, the instructions or ingredients themselves? I'm not sure here.
//Write a function with a for loop to search the recipes by keyword, make sure both the input and output are case-insensitive
//Write a function to move a recipe from within the array to the array within the array, "Favorite Recipes"