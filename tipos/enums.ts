(() => {
    //Forma de manejar numeros
    enum AudioLevel {
        min = 1,
        medium,//Su valor es 2
        medium2,//Su valor es 3
        max = 10//Su valor es 10
    }
    let currentAudio = AudioLevel.max
    console.log(currentAudio)
    console.log(AudioLevel)
})()