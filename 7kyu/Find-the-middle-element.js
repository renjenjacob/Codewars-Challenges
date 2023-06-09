//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//Examples

//gimme([2, 3, 1]) => 0
//gimme([5, 10, 14]) => 1

//Solution

function gimme(triplet) {
    return triplet.indexOf(triplet.concat().sort(function(a, b) { return a - b })[1])
}