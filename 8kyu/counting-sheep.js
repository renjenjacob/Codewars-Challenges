//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//Don't forget to check for bad values like null/undefined

//Example

/*[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,   --> 17
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]*/

//Solution 1

function countSheeps(arrayOfSheep) {
    let counter = 0;
    for (let i=0; i<arrayOfSheep.length; i++) {
        let counter = 0;
        if(arrayOfSheep[i] == true) {
            counter++;
        } else {
            counter;
        }
    }
    return counter;
}

//Solution 2

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}
