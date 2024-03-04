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

@printToConsoleConditional( true)
export class Post {
    public publicAPI: string = 'https://jsonplaceholder.typicode.com'
    constructor(
        public name: string
    ){}
}