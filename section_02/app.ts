console.log("Hello world!!!")

console.log(5 + 7)

console.log("******section 02 lesson 01******")
console.log("### CORE DATA TYPES ###")

function add (n1: number, n2: number){
    return n1 + n2
}

const v1 = '10'
const v2 = 10
const v3 = 8

// const exec1 = add(v1, v2) -> nesse caso o próprio vscode vai apontar erro dizendo que o tipo passado pra func está errado
const exec2 = add(v3, v2)

console.log(`| Exec certa ${exec2}`)


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

console.log("******section 02 lesson 03******")