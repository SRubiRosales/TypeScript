(() => {
    let flash: {name:string, age?:number, powers:string[]} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Fast', 'Travel along the time']
    }
    flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Strong'],
        /*getNombre() {
            return this.name;
        }*/
    }
    console.log(flash);
})()