function printToConsole( constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if(print) {
        return () => console.log('Hola mundo');
    } else {
        return () => {}
    }
}

const blockPrototype = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@blockPrototype
@printToConsoleConditional( true)
export class Post {
    public publicAPI: string = 'https://jsonplaceholder.typicode.com'
    constructor(
        public name: string
    ){}
}