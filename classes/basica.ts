(() => {
    class Avenger {
        static avgAge: number = 35;//Se accede a la propiedad de manera global
        static getAvgAge() {
            return this.name;
        }
        constructor(private name: string, 
            private team: string, 
            public realName?: string
            ) {}

        public bio() {
            return `${this.name} (${this.team})`;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();