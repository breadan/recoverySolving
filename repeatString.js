

function repeatString(num, str) {
    let newString = '';
    for(let i = 0; i < num; i++) {
        newString += str;
    }
    return newString;
}

console.log( repeatString(5, 'A'));

// Another Way

function repeats(num, str) {
    return str.repeat(num);
}

console.log(repeats(4, 'B'));