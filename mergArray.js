/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

let merged = function (num1, m, num2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    num1[i] = num2[j];
    m++;
  }
  num1.sort((a, b) => a - b);
};
let num1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let num2 = [2, 5, 6];
let n = 3;

merged(num1, m, num2, n);

console.log(num1);
