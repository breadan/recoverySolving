


function revArray(n) {
   return n
   .toString()
   .split("")
   .map((m) => Number(m))
   .reverse();

}

console.log(revArray(98745));