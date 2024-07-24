//******** Sum With Out Highest and Lowest ************** */

const sum = (arr) => {
  if (arr == null) return 0;
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let resultFilter = arr.filter((ele) => ele !== maxNum && ele !== minNum);
  let result = resultFilter.reduce((acc, current) => acc + current);
  return result;
};

//it is true
const sum2 = (arr) => {
  if (arr == null) return 0;
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
};
console.log(sum([1, 1, 8, 9, 5, 9, 7]));
console.log(sum2([1, 1, 8, 9, 5, 9, 7]));
