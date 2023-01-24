console.log('94 - Built in Generics')
console.log(' ')

// const names: string[] = [
//     'davi', 
//     'maria'
// ]

// const arr: Array<string> = []

console.log(' ')
console.log('95 - Creating a Generic function')
console.log(' ')

function merge<T extends object, U>(objA: T, objB: U){
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Davi'}, {age: 22})
const mergedObj2 = merge({name: 'Maria', profession: 'nurse'}, {age: 24})
console.log(mergedObj.name)
console.log(mergedObj.age)
console.log(mergedObj2.name, mergedObj2.profession)

console.log(' ')
console.log('96 - Working with constrainst')
console.log(' ')

console.log(' ')
console.log('97 - Another Generic Function ')
console.log(' ')

interface Lengthy{
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T):[T, string]{
    let descriptionText = 'Got no Value'

    if( element.length === 1){
        descriptionText = 'Got ' + element.length + ' element'
    }else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements'
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Davi'))
console.log(countAndDescribe('D'))
console.log(countAndDescribe(''))
console.log(countAndDescribe(['Davi', 'Silva', 'Santos']))

console.log(' ')
console.log('98 - keyof constraint ')
console.log(' ')

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key:U){
    return 'Value: ' + obj[key]; 
}

extractAndConvert({age: 22}, 'age')

console.log(' ')
console.log('99 - Generic Classes ')
console.log(' ')

class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item)
    };

    removeItem(item: T){
        if( this.data.indexOf(item) === -1){
            return;
        }

        this.data.splice(this.data.indexOf(item), 1)
    };

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

textStorage.addItem('Davi')
textStorage.addItem('Maria')
textStorage.addItem('Doly')
console.log(textStorage.getItems())
textStorage.removeItem('Doly')
console.log(textStorage.getItems()) 

console.log(' ')
console.log('101 - Generic Utility Types ')
console.log(' ')

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Davi', 'Maria'];
// names.push('Doly');
// names.pop('Davi');