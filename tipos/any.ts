(() => {
    let avenger: any = 123;
    let exist;
    let power;
    avenger = 'Dr. Strange';
    //console.log( avenger.charAt(0))
    console.log( (avenger as string).charAt(0))
    avenger = 150.234567;
    console.log((<number>avenger).toFixed(3))
    console.log(exist)
    console.log(power)
})();