console.log(' ')
console.log("lesson 26 Return types & 'voids'")
console.log(' ')

function add (n1: number, n2: number): number{
    return n1 + n2   
}

function printResult(num: number){
    console.log('The result is: ' + num)
}

printResult(add(5, 7))