console.log("lesson 29 The 'unknown' type")
console.log(' ')

let userInput: unknown;

console.log(' ')
console.log("lesson 30 The 'never' type")
console.log(' ')

function generateError(message: string, code: number): never{
    throw{
        message: message,
        errorCode: code,
    };
}

generateError('This cannot be found.', 404)