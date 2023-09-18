(() => {
    let flash: {name:string, age?:number, powers:string[], getName?:() => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Fast', 'Travel along the time']
    }
    let superman: {name:string, age?:number, powers:string[], getName?:() => string } = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Strong']
    }
    console.log(flash);
})()