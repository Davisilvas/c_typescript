console.log('section 06')
console.log('83 - Intersection type')

type Admin = {
    name: string;
    privileges: string[]
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;  // it's an intesection

const e1: ElevatedEmployee = {
    name: "Davi",
    privileges:  ["Vale refeição"],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

console.log(' ')
console.log('84 - More on type guards')
console.log(' ')

function add (a: number, b: number): number;
function add (a: string, b: string): string;
function add (a: string, b: number): string;
function add (a: number, b: string): string;
function add(a: Combinable, b: Combinable){
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    }
    
    return a + b
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee){
    console.log("Name: " + emp.name);
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges)
    }
    if('startDate' in emp){
        console.log('Start date: ' + emp.startDate)
    }
}

class Car {
    drive(){
        console.log('Drivin a CAR...')
    }
}

class Truck{
    drive(){
        console.log('Driving a TRUCK and carrying too much cargo')
    }

    loadCargo(amount: number){
        console.log('loading cargo...' + amount)
    }
}


type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(500);
    }
}

useVehicle(v1)
useVehicle(v2)

console.log(' ')
console.log('85 - Discriminated Unions')
console.log(' ')

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Moving at speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 23})
moveAnimal({type: 'horse', runningSpeed: 43})

console.log(' ')
console.log('86 - Type casting')
console.log(' ')

// const paragraph = document.querySelector('p')!; // -> reconizes it's a paragraph element
const paragraph = document.getElementById('message-output')!; // -> don't recognize

const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// option 1

const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement
// option 2

const second = document.getElementById('second-paragraph');

// if(second){
//     (second as HTMLParagraphElement ).value = 'Added by TS';
//     //second.value = 'aaaa'
// }


userInputElement.value = 'Hi there'


console.log(' ')
console.log('87 - Index Properties')
console.log(' ')

interface ErrorContainer{
    //id: string;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "not a valid email.",
    userName: "Must start with a capitou character."
}

console.log(' ')
console.log('88 - Funtion Overloads')
console.log(' ')

const result = add(1, 5);
const result2 = add('Davi', ' Santos')
result2.split(' ')
console.log(result2)

console.log(' ')
console.log('89 - Optional Chaining')
console.log(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'Davi',
    job: {
        title: 'Developer',
        description: "Develops web applications."
    }
}

console.log(fetchedUserData?.job?.title)

console.log(' ')
console.log('90 - Nullish Coalescing')
console.log(' ')

const uInput = "";

const storedData = uInput ?? "DEFAULT" ;

console.log(storedData)