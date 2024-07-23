


function getIndex(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == "Alaa") {
            return "Hi My Dear Alaa  index: " + i;  // Not array[i]
        }
    }
}

let test = ["Soso", "Alaa", "Zead", "Mona"];
console.log(getIndex(test));

//Another Way

function getInfo(arr) {
    let index = arr.indexOf("Alaa");
    return index;
}

console.log(getInfo(test));