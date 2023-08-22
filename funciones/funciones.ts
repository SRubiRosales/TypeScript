(() => {
    const hero: string = 'Flash';
    function returnName(): string {//Importante especificar el tipo de dato de retorno
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Batiseñal activada!';
    }

    console.log(typeof activateBatisignal);
    const heroName = returnName();
})()