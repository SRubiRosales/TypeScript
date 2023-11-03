(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log('Constructor Avenger invocado')
        }
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ) {
            super(name, realName);
            console.log('Constructor Xmen invocado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 caracteres')
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName);//Los getters no se ejecutan, solo se invocan como una propiedad
    wolverine.fullName = 'Steve';
    // wolverine.getFullNameFromXmen();
})();