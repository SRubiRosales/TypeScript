(() => {
    const addNumbers = (a: number, b:number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    //myFunction es de tipo Function y recibe dos parametros de tipo number
    //Despues de los ":" lee la firma del metodo
    let myFunction: (x:number, y:number) => number;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumbers
    console.log(myFunction(1, 2))
    //myFunction = greet
    //console.log(myFunction('Batman'))
    //myFunction = saveTheWorld
    //console.log(myFunction())
})()