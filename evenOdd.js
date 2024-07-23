 function even (num)  {
    if(num % 2 === 0 ) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(even(-42));

let evenOdd = (value) => {
    return value %2 === 0 ? "Even" : "Odd";
}

console.log(evenOdd(5));