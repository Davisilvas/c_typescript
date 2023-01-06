console.log(' ')
console.log("lesson 26 Return types & 'voids'")
console.log(' ')

function add (n1: number, n2: number): number{
    return n1 + n2   
}

function printResult(num: number){
    console.log('The result is: ' + num)
}

let trash: undefined;

printResult(add(5, 7))
console.log(printResult(add(5, 7)))

console.log(' ')
console.log("lesson 27 function as types")
console.log(' ')

let combineValues: (a:number, b: number) => number;

// let combineValues: Function;
//combineValues = 1 -> error

combineValues = add; 

console.log(combineValues(7, 9))

console.log(' ')
console.log("lesson 28 function types & callbacks")
console.log(' ')

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result)
})