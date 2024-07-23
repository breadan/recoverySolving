//**************** First Duplicate ******************** */
const firstDuplicate = (arr) => {
  let duplicates = {};
  for (let i = 0; i < arr.length; i++) {
    if (duplicates[arr[i]]) {
      console.log(`The first duplicate element is: ${arr[i]}`);
      break;
    } else {
      duplicates[arr[i]] = true;
    }
  }
  console.log(duplicates);
};

firstDuplicate([1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 10]);

function findFirstDuplicate(arr) {
  let numMap = {};
  for (const num of arr) {
    if (!numMap[num]) {
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  }
  for (const key in numMap) {
    if (numMap[key] === 2) {
      console.log(`The first duplicate element is: ${key}`);
      return Number(key);
    }
  }
}
findFirstDuplicate([1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 10]);
