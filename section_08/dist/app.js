"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('Section 08 - Studying decorators');
console.log('105 - First Class Decorator');
console.log(' ');
// function Logger(constructor: Function){
//     console.log('Logging...')
//     console.log(constructor)
// }
// @Logger 
// class Person {
//     name = 'Max';
//     constructor(){
//         console.log('Creating person object...')
//     }
// }
// const pers = new Person();
// console.log(pers)
console.log(' ');
console.log('106 - Working with decorators factories.');
console.log(' ');
// function Logger(LogString: string){
//     return function(constructor: Function){
//         console.log(LogString)
//         console.log(constructor)
//     }
// }
// @Logger('TESTING_DECORATOR')
// class Person {
//     name = 'Max';
//     constructor(){
//         console.log('Creating person object...')
//     }
// }
// const pers = new Person();
// console.log(pers)
console.log(' ');
console.log('107 - Building more usefull decorators.');
console.log(' ');
function Logger(LogString) {
    return function (_) {
        console.log(LogString);
        // console.log(constructor)
    };
}
// function WithTemplate(template: string, hookId: string){
//     return function(constructor: any){
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor()
//         if(hookEl){
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name
//         }
//     }
// }
// const testString:string = '<h1>Davi</h1>'
// @Logger("LOGGER - DECORATOR")
// @WithTemplate(testString, 'app')
// class Person {
//     name:string = "Maria"
//     constructor(){
//         console.log('Creating person object...')
//     }
// }
// const pers = new Person();
// console.log(pers)
console.log(' ');
console.log('108 - Adding multiple decorators.');
console.log(' ');
console.log(' ');
console.log('109 - Diving into property decorators.');
console.log(' ');
function Log(target, propertyName) {
    console.log('property decorator');
    console.log(target, propertyName);
}
// class Product{
//     @Log
//     title: string;  
//     private _price: number
//     set price(val:number){
//         if(val > 0){
//             this._price = val
//         }else{
//             throw new Error('Invalid price! Price should be greater than 0')
//         }
//     }
//     constructor(t: string, p: number){
//         this.title = t;
//         this._price = p
//     }
//     getPriceWithTax(tax: number){
//         return this._price * (1 + tax)
//     }
// }
console.log(' ');
console.log('110 - Accessor & Parameter Decorators.');
console.log(' ');
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Argument Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price! Price should be greater than 0');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
console.log(' ');
console.log('111 - Returning (and changing) a Class in a Class Decorator.');
console.log(' ');
// this way the logic we add does not run when the class is defined, but when it's instantiated
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
const testString = '<h1>Davi</h1>';
let Person = class Person {
    constructor() {
        // name:string;
        // constructor(n: string){
        //     this.name = n
        // }
        this.name = 'Nina';
    }
};
Person = __decorate([
    WithTemplate(testString, 'app')
], Person);
const pers = new Person();
console.log(pers);
console.log(' ');
console.log('112 - Other Decorator Return Types.');
console.log(' ');
