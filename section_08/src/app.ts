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
console.log('112 - Other Decorator Return Types.')
console.log(' ')
