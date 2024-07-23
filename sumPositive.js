//map && reduce && filter
function positiveSum(arr) {
    let pos = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            pos += arr[i];
        }
    }
    return pos;

}
let test = [1, 2, 8, -6, -7];

console.log(positiveSum(test));
//***************************************************************** */
function posSum(array) {
    return array.filter((x) => x > 0)
    .reduce((acc, current) => acc + current, 0)
}
console.log(posSum([1, 2, 8, -6, -7]));


//filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

//***************************************************************** */
//map
let arrMap = [10, 20, 30, 40];

let myMap = [];
for(ele of arrMap) {
    myMap.push(ele * 2)
}
console.log(myMap);

//use map
let res =  arrMap.map(function(ele) {
    return ele / 2;
})
console.log(res);

//filter
let arrFilter = arrMap.filter(function(ele) {
    if(ele > 25 ) {
        return ele;
    }
});

console.log(arrFilter);

//reduce
let useReduce = arrMap.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
});
console.log(useReduce);