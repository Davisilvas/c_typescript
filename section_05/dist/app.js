"use strict";
console.log('**********');
console.log('Interfaces');
console.log('**********');
class Person {
    constructor(n, output, age) {
        this.age = age;
        this.name = n;
        this.outputName = output;
    }
    greet(phrase) {
        if (this.age) {
            console.log(phrase + ' ' + this.outputName + ' and my age is ' + this.age);
        }
        else {
            console.log(phrase + ' ' + this.outputName);
        }
    }
}
let user1;
user1 = new Person('Davi', 'Wulfiric', 22);
user1.greet('Hi there, I am');
console.log(user1);
