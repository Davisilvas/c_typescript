console.log('**********')
console.log('Interfaces')
console.log('**********')

interface addFn {
    (a: number, b: number): number;
}

interface Named {
    readonly name: string;  
    outputName?: string; // -> optional
}

//interface Greetable extends Named{
interface Greetable {
    greet(phrase: string): void; 
}

class Person implements Greetable, Named{
    name: string;
    outputName: string
    
    constructor(n: string, output: string, protected age?: number){
        this.name = n;
        this.outputName = output
    }

    greet(phrase: string){

        if(this.age){
            console.log(phrase + ' ' + this.outputName + ' and my age is ' + this.age)
        }else{
            console.log(phrase + ' ' + this.outputName)
        }
    }
}

let user1: Greetable;

user1 = new Person('Davi', 'Wulfiric' ,22)

user1.greet('Hi there, I am')

console.log(user1)