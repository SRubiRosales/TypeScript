import { genericFunction, genericFunctionArrow, printObject } from './generics/generics';

printObject(123);
printObject(new Date());
printObject({a:1, b:2, c:3});
printObject([1, 2, 3, 4]);
printObject('Hola mundo');

const name = 'Sharon';
console.log(genericFunction(3.14159).toFixed(2));
console.log(genericFunction(name).toUpperCase());
console.log(genericFunctionArrow(new Date().getDate()))