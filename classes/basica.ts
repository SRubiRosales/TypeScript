(() => {
    class Avenger {
        static avgAge: number = 35;//Se accede a la propiedad de manera global
        constructor(private name: string, 
            private team: string, 
            public realName?: string
            ) {}
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
})();