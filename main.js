"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
})();
(() => {
    const client = {
        name: 'Sharon',
        age: 25,
        address: {
            id: 124,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KY2 SUD'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map