console.log("##########################")
console.log("******section 02 lesson 03******")
console.log("OBJECT TYPES")

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] -> this is how we declaire a tuple
// } = {
//     name: 'Davi',
//     age: 21,
//     hobbies: ['Sports', 'Gaming'],
//     role: [2, 'author']
// }

const person = {
    name: 'Davi',
    age: 21,
    hobbies: ['Sports', 'Gaming'],
    role: [2, 'author']
}


// -> favouritActivities = 'Dancing' -> this line is wrong because its just a string and not a array of strings


// what we'll see if we hover the mouse over the const person is the object type inferred by TS. In this we don't have a tradiotinal ket value pairs, but key type pairs.

//console.log(person.nickname)

let favouritActivities: string[];  // This syntax accepts only an array of strings. If we wish to mux types of data we should do other syntax

favouritActivities = ['Dancing']

let any: any[] 
// the syntax above accepts a mix of types of datas

any = [1, 'Davi', true, favouritActivities]

person.role.push('admin')
person.role[1] = 10

console.log(person.role)