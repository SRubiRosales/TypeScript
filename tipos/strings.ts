(()=> {
    const batman: string = 'Batman';//Es más ligero
    const superman: string = "Héroe: Superman";
    const wonderWoman: string = `Mujer maravilla`;
    console.log(`I'm ${wonderWoman}`);
    console.log(batman.toUpperCase());
    //Si la posición 10 existe, hace el uppercase
    console.log(batman[10]?.toUpperCase() || 'No está presente');
})();