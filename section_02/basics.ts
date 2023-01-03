console.log("Hello world!!!")

console.log(5 + 7)

console.log("******section 02 lesson 01******")
console.log(" CORE DATA TYPES ")

function add (n1: number, n2: number){
    return n1 + n2
}

const v1 = '10'
let v2 = 10
const v3 = 8

// const exec1 = add(v1, v2) -> nesse caso o próprio vscode vai apontar erro dizendo que o tipo passado pra func está errado
const exec2 = add(v3, v2)

console.log(`| Exec certa ${exec2}`)

console.log("##########################")
console.log("******section 02 lesson 02******")

const printResult = true
const resultPhrase = "The result is: "

function add2 (n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2

    if(showResult){
        console.log(phrase + result)
    } else{
        return result
    }
}

add2(v2, v3, printResult, resultPhrase );

console.log("##########################")
console.log("******section 02 lesson 03******")
console.log("TYPE ASSIGNMENT & TYPE INFERENCE")

let v4: number = 21;
// this syntax specifies that the var v4 has to recieve a number as it's value. But this is redundant and also not a good practice, because TS can perfectly infer this type from there.

let v5: number;
// this instead is usefull and a good practice because here we only started the variable and yet not assigned any value to it.

//v5 = 'davi'
//if we try to do the above code we'll receive an error that tells " type 'string' not assignable". It happens because we said that it has to be of number type.

