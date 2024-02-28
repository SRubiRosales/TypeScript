function printToConsole( constructor: Function) {
    console.log(constructor);
}

@printToConsole
export class Post {
    public publicAPI: string = 'https://jsonplaceholder.typicode.com'
    constructor(
        public name: string
    ){}
}