(() => {
    class Avenger {
        private name: string;
        private team: string;
        public realName?: string;
        static avgAge: number = 35;//Se accede a la propiedad de manera global
        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this. realName = realName;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap');
    console.log(antman);
    console.log(Avenger.avgAge);
})();