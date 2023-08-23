/* Los argumentos opcionales van al final
Los valores por defecto se definen después del tipo de dato variable: type = value
*/
(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || '----'}`;
        }
    }
    const name = fullName('Tony', 'Stark', true);
    console.log({name});
})()