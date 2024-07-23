//**************** Palindrome String ******************** */
function Palindrome(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  console.log({ result: reversed });
  if (str === reversed) {
    console.log('The given string is a palindrome');
  } else {
    console.log('The given string is not a palindrome');
  }
}
Palindrome('Breadan');
