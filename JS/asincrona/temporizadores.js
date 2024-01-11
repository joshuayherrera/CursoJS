//Muestra solamente una vez temporizado el codigo dentro
/* setTimeout(() => {
    console.log("Hi my bro")
}, 3000) //los numeros estan en milisegundos */

//Cada segundo mostrara la hora actualizada
/* setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);*/

let temporizadorOut = setTimeout(() => {
    console.log("Papasito xd")
}, 2000);

let temporizadorInterval = setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

//Los clear sirven para parar la ejecucion de los temporizadores
//siempre y cuando esten definidos por una variable
clearTimeout(temporizadorOut)
clearInterval(temporizadorInterval)