

// Write a function that removes 
// the spaces from the string, then return the resultant string.


function noSpac(x){
    return x.trim();

}
console.log(noSpac("   a laa   "));

function noSpace2(x){
    return x.split('');

}
console.log(noSpace2("   a laa   "));

function noSpace3(x){
    return x.join('-');

}
console.log(noSpace3(['alaa', 'breadan']));

//final
function noSpace(x){
    return x.split(' ').join('');

}
console.log(noSpace("   a laa   "));
