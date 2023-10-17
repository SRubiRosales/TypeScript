(() => {
    //Arreglo que admite numbers
    const numbers: (number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villian = ['Duende verde', 'Rinho', 'Dr Octopus'];
    numbers.push(11)
    console.log(numbers)
    villian.forEach(v => console.log(v.toUpperCase()))
    numbers.forEach(v => console.log(v))
})();