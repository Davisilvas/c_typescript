console.log("lesson 22 Union types");
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var run1 = combine(22, 24);
var run2 = combine("Davi", "Maria");
console.log(run1);
console.log(run2);
console.log(' ');
console.log("lesson 23 Literal Types");
console.log(' ');
function combine2(input1, input2, resultConversion
// Above we alow just these two specific strings, not just any sting
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var run3 = combine2(22, 24, 'as-text');
var run4 = combine2(22, 24, 'as-number');
var run5 = combine2("22", "24", 'as-number');
console.log(run3 + ' -- here it did the addition normaly but outputed as a string');
console.log(run4 + ' -- here it did the addition normaly but outputed as a number');
console.log(run5 + ' -- here it concatenated the numbers, but outputed it as a number because we orderd it be converted');
console.log(' ');
console.log("lesson 24 Type Aliases / Custom Types");
console.log(' ');
