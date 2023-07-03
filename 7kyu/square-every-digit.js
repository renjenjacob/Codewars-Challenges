//In this kata, you are asked to square every digit of a number and concatenate them.
//Note: The function accepts an integer and returns an integer.

//Examples

//9119 --> 811181
//765 --> 493625

//Solutions

function squareDigits(num){
    let numArr = String(num).split('').map(Number)
    let square = []
    for(let i=0; i<numArr.length; i++) {
        square.push(Math.pow(numArr[i],2));
    }
    return Number(square.join(''))
}

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}


