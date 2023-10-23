(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123456
    }

    // const {poder, vision} = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = ( { ironman, ...resto}:Avengers ) => {
        console.log(ironman);
        console.log(resto);
    }
    printAvenger(avengers);

    const avengersArr: [string, boolean, number] = ['Capitán América', true, 123.45];
    const [capitan, ironman, numero] = avengersArr;
    console.log(ironman, capitan);
})();