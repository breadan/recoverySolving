//split     map     repeat      join

function doubleChar(str) {
  return str
    .split('')
    .map((el) => el.repeat(2))
    .join('');
}

console.log(doubleChar('doae'));
