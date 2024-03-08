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

function CheckValidPostId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id:number) => {
            if(id < 1 || id > 1000) {
                return console.error('Post Id must be between 1 and 1000');
            } else {}
                return originalMethod(id);
        }
    }
}

function readonly( isWritable: boolean = true):Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this)
                return 'Sharon';
            },
            set(this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}

@blockPrototype
@printToConsoleConditional( true)
export class Post {
    @readonly(false)
    public publicAPI: string = 'https://jsonplaceholder.typicode.com'
    constructor(
        public name: string
    ){}

    @CheckValidPostId() //Factory Decorator
    savePostToDB(id: number) {
        console.log(`Post saved in DB ${id}`);
    }
}