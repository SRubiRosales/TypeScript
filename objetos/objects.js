"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Fast', 'Travel along the time']
    };
    flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Strong'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
