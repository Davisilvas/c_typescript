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
console.log('114 - Creating an "Autobind" Decorator.');
// THIS IS HOW WE GET A VALUE FROM A CONSTRUCTOR AND USE IT IN A DECORATOR!!!
console.log(' ');
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor(m) {
        this.message = m;
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer("Getting a value from the constructor!!");
const btn = document.querySelector('button');
btn.addEventListener('click', p.showMessage);
// -> this is how it works in vanilla JS, without the use of decorators.
// btn.addEventListener('click', p.showMessage.bind(p))
console.log(' ');
console.log('115 - Validation with decorators.');
console.log(' ');
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t,
            this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', e => {
    e.preventDefault();
    const titleElement = document.getElementById('title');
    const priceElement = document.getElementById('price');
    const title = titleElement.value;
    const price = +priceElement.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again.');
    }
    console.log(createdCourse);
});
