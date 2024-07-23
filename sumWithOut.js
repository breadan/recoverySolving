
let arr = [1, 5, 15, 20];

//check if empty value
//Find max value
//check min value
//filter array

function sumWithOutValue(array) {
    if(array == null) return 0;

    //get max & min
    let maxValue = Math.max(...array);
    let minValue = Math.min(...array);

    // console.log(maxValue, minValue);
    let filterArray = array.filter((x) => x !== maxValue && x !== minValue);
    let resArray = filterArray.reduce((acc, current) => acc + current, 0);
    return resArray;

}

console.log(sumWithOutValue(arr));


function filterSum(array) {
    if(array == null) return 0;
    return array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array))
    .reduce((acc, current) => acc + current);
}

console.log(filterSum(arr));