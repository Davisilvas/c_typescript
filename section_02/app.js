console.log(' ');
console.log("lesson 26 Return types & 'voids'");
console.log(' ');
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('The result is: ' + num);
}
var trash;
printResult(add(5, 7));
console.log(printResult(add(5, 7)));
console.log(' ');
console.log("lesson 27 function as types");
console.log(' ');
var combineValues;
// let combineValues: Function;
//combineValues = 1 -> error
combineValues = add;
console.log(combineValues(7, 9));
