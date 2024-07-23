


// Given an array of integers.

// Return an array, where the first element is the
//  count of positives numbers and the second element is sum of negative numbers.
//  0 is neither positive nor negative

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// you should return [10, -65].

function countSum(array) {
    let count = 0;
    let sum = 0;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0) {
            count++;
        } else if(array[i] < 0) {
            sum += array[i];
        }

    }
    let res = [count, sum];
    // return `count Positive ${count} && sum negative ${sum}`;
    return res;
}

console.log(countSum(input));

//Another Way 
function sumCount(array) {
    let pos = [];
    let neg = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            pos.push(array[i]);
        } else {
            neg += array[i];
        }
    }
    return [pos.length, neg];
}

console.log(sumCount(input));

//Another Way

function sum_count(array) {
    let count = array.filter((x) => x > 0).length;
    let sum = array.filter((x) => x < 0).reduce((acc, current) => acc + current,0);

    return [count, sum];
}

console.log(sum_count(input));
