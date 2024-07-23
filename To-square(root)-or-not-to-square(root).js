// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
    //create array to return on it
    let newArray = [];
    for(let i =0; i < array.length; i++) {
        if(Number.isInteger(Math.sqrt(array[i]))) {
           newArray.push(Math.sqrt(array[i]));
        } else {
            newArray.push(array[i] * array[i]);
        }
    }
    return newArray;
}

let test = [4,3,9,7,2,1]
console.log(squareOrSquareRoot(test));