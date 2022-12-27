console.log("Hello world!!!");
console.log(5 + 7);
console.log("******section 02 lesson 01******");
console.log("### CORE DATA TYPES ###");
function add(n1, n2) {
    return n1 + n2;
}
var v1 = '10';
var v2 = 10;
var v3 = 8;
// const exec1 = add(v1, v2) -> nesse caso o próprio vscode vai apontar erro dizendo que o tipo passado pra func está errado
var exec2 = add(v3, v2);
console.log("| Exec certa ".concat(exec2));
console.log("******section 02 lesson 02******");
var printResult = true;
var resultPhrase = "The result is: ";
function add2(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
add2(v2, v3, printResult, resultPhrase);
