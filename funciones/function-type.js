"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    //myFunction es de tipo Function y recibe dos parametros de tipo number
    //Despues de los ":" lee la firma del metodo
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    //myFunction = greet
    //console.log(myFunction('Batman'))
    //myFunction = saveTheWorld
    //console.log(myFunction())
})();
