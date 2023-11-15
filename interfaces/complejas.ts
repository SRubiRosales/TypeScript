(() => {
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
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
        },
        getFullAddress() {
            return this.address.city;
        }
    }
    const client2: Client = {
        name: 'Melissa',
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KY2 SUD'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }
    
})();