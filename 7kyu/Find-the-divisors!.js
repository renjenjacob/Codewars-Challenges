//Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest.
// If the number is prime, return the string '(integer) is prime'.

//Examples

//divisors(12) --> [2,3,4,6]
//divisors(25) --> [5]
//divisors(13) --> "13 is prime"

//Solution

function divisors(integer) {
    let divs = [];
  
    for(let i = 2; i < integer; i++) {
        if(integer % i === 0) {
    	    divs.push(i);
        }
    }
  
    return divs.length ? divs : integer + ' is prime';
};
