"use strict";
// nombreVariable? indica que la variable es opcional
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
