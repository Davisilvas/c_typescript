console.log('Section 08 - Studying decorators')
console.log('105 - First Class Decorator')
console.log(' ')

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

console.log(' ')
console.log('106 - Working with decorators factories.')
console.log(' ')

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

console.log(' ')
console.log('107 - Building more usefull decorators.')
console.log(' ')

function Logger(LogString: string){
    return function(_: Function){
        console.log(LogString)
        // console.log(constructor)
    }
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


console.log(' ')
console.log('108 - Adding multiple decorators.')
console.log(' ')
console.log(' ')
console.log('109 - Diving into property decorators.')
console.log(' ')

function Log(target: any, propertyName: string | symbol){
    console.log('property decorator')
    console.log(target, propertyName)
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

console.log(' ')
console.log('110 - Accessor & Parameter Decorators.')
console.log(' ')

function Log2(target: any, name:string, descriptor: PropertyDescriptor){
    console.log("Accessor Decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name:string | symbol, descriptor: PropertyDescriptor){
    console.log("Method Decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name:string | symbol, position:number ){
    console.log("Argument Decorator")
    console.log(target)
    console.log(name)
    console.log(position)
}


class Product{
    @Log
    title: string;  
    private _price: number

    @Log2
    set price(val:number){
        if(val > 0){
            this._price = val
        }else{
            throw new Error('Invalid price! Price should be greater than 0')
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p

    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax)
    }
}


console.log(' ')
console.log('111 - Returning (and changing) a Class in a Class Decorator.')
console.log(' ')

// this way the logic we add does not run when the class is defined, but when it's instantiated

function WithTemplate(template: string, hookId: string){
    return function<T extends {new(..._: any[]): {name:string}}>(originalConstructor: T){
        return class extends originalConstructor {
            constructor(..._: any[]){
                super()
                const hookEl = document.getElementById(hookId);
                if(hookEl){
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}

const testString:string = '<h1>Davi</h1>'

@WithTemplate(testString, 'app')
class Person {
    // name:string;
    
    // constructor(n: string){
    //     this.name = n
    // }

    name:string = 'Nina'
    
    constructor(){
        
    }
}

const pers = new Person();
console.log(pers)

console.log(' ')
console.log('114 - Creating an "Autobind" Decorator.')
// THIS IS HOW WE GET A VALUE FROM A CONSTRUCTOR AND USE IT IN A DECORATOR!!!
console.log(' ')

function Autobind(_: any, _2: string | symbol, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    };
    return adjDescriptor
}

class Printer {
    // message: string = "This works!";
    message: string
    
    constructor (m: string){
        this.message = m
    }
    
    @Autobind
    showMessage(){
        console.log(this.message)
    }
}

const p = new Printer("Getting a value from the constructor!!")

const btn = document.querySelector('button')!;
btn.addEventListener('click', p.showMessage)

// -> this is how it works in vanilla JS, without the use of decorators.
// btn.addEventListener('click', p.showMessage.bind(p))

console.log(' ')
console.log('115 - Validation with decorators.')
console.log(' ')

interface ValidatorConfig {
    [property: string]:{
        [validatableProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}

function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig){
        return true
    }

    let isValid = true;
    for (const prop in objValidatorConfig){
        console.log(prop)
        for (const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop]
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    break;
            }
        }
    }
    return isValid
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number){
        this.title = t,
        this.price = p
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', e => {
    e.preventDefault();
    const titleElement = document.getElementById('title') as HTMLInputElement;
    const priceElement = document.getElementById('price') as HTMLInputElement;

    const title = titleElement.value;
    const price = +priceElement.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)){
        alert('Invalid input, please try again.')
    }
    console.log(createdCourse)
})