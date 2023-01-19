"use strict";
var _a;
console.log('section 06');
console.log('83 - Intersection type');
const e1 = {
    name: "Davi",
    privileges: ["Vale refeição"],
    startDate: new Date()
};
console.log(' ');
console.log('84 - More on type guards');
console.log(' ');
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
class Car {
    drive() {
        console.log('Drivin a CAR...');
    }
}
class Truck {
    drive() {
        console.log('Driving a TRUCK and carrying too much cargo');
    }
    loadCargo(amount) {
        console.log('loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}
useVehicle(v1);
useVehicle(v2);
console.log(' ');
console.log('85 - Discriminated Unions');
console.log(' ');
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 23 });
moveAnimal({ type: 'horse', runningSpeed: 43 });
console.log(' ');
console.log('86 - Type casting');
console.log(' ');
// const paragraph = document.querySelector('p')!; // -> reconizes it's a paragraph element
const paragraph = document.getElementById('message-output'); // -> don't recognize
const userInputElement = document.getElementById('user-input');
// option 1
const userInputElement2 = document.getElementById('user-input');
// option 2
const second = document.getElementById('second-paragraph');
// if(second){
//     (second as HTMLParagraphElement ).value = 'Added by TS';
//     //second.value = 'aaaa'
// }
userInputElement.value = 'Hi there';
console.log(' ');
console.log('87 - Index Properties');
console.log(' ');
const errorBag = {
    email: "not a valid email.",
    userName: "Must start with a capitou character."
};
console.log(' ');
console.log('88 - Funtion Overloads');
console.log(' ');
const result = add(1, 5);
const result2 = add('Davi', ' Santos');
result2.split(' ');
console.log(result2);
console.log(' ');
console.log('89 - Optional Chaining');
console.log(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Davi',
    job: {
        title: 'Developer',
        description: "Develops web applications."
    }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
console.log(' ');
console.log('90 - Nullish Coalescing');
console.log(' ');
const uInput = "";
const storedData = uInput !== null && uInput !== void 0 ? uInput : "DEFAULT";
console.log(storedData);
