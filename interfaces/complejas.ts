(() => {
    interface Client {
        name: string;
        age?: number;
        address: Address;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    const client: Client = {
        name: 'Sharon',
        age: 25,
        address: {
            id: 124,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    }
    const client2: Client = {
        name: 'Melissa',
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KY2 SUD'
        }
    }
    
})();