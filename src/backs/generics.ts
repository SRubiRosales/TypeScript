
import { genericFunction, genericFunctionArrow, printObject } from '../generics/generics';
import { Villain, Hero } from '../interfaces';

printObject(123);
printObject(new Date());
printObject({a:1, b:2, c:3});
printObject([1, 2, 3, 4]);
printObject('Hola mundo');

const name = 'Sharon';
console.log(genericFunction(3.14159).toFixed(2));
console.log(genericFunction(name).toUpperCase());
console.log(genericFunctionArrow(new Date().getDate()));

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).name);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);