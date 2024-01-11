/****************************CONSOLE********************************* 
 console.table(OBJETOS, ARREGLOS)
 console.time('cuanto dura mi codigo') 
 //AQUI VA TODO EL CODIGOOOOOOOOOOOOO
 console.timeEnd('cuanto dura mi codigo') 
 console.clear(limpia toda la consola)
 console.count("cualquier texto")
 console.assert(condicion, variable1, variable2, variable con mensaje
    de que se deberia esperar.)

*****************************DATE**********************************
let time = new Date()

console.log(time)
console.log(time.getFullYear())
console.log(time.getDay())
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getTime())
console.log(time.toLocaleString())
console.log(time.toDateString())
console.log(time.toTimeString())

*****************************MATH************************************
console.log(Math.PI)
console.log(Math)
//potencia
console.log(Math.pow(3,2))
//raiz cuadrada
console.log(Math.sqrt(49))
//Genera un numero random redondeado del 1 al 100
console.log(Math.round(Math.random()*100))
//Devuelve solamente el numero entero
console.log(Math.floor(11.09820835787239859823758237))

********************OPERADOR DE CORTOCIRCUITO**********************
//Si en la izquierda de OR es verdadero tomara ese argumento 
console.log(true || "mensajito")
console.log("mensaje que toma" || "mensaje no tomado")
//Si en la izquierda de AND es falso tomara ese argumento
console.log(false && "mensajito")
console.log(0 && "mensajito")

**********************ALET,CONFIRM & PROMPT*************************
let alerta = alert("No hay conexión"),
confirmacion = confirm("Confirmas que te robemos todos tus datos y toda tu vida al aceptar?"),
aviso = prompt("Pon algo mrd")

console.log(alerta)
console.log(confirmacion)
console.log(aviso)

************************EXPRESION REGULAR**************************
let cadena = "hola mi friend jaime como tash? jsjajs"

let expReg = new RegEcp("ja", "i=(insensitive)g=(que siga buscando))
let expReg2 = /ja{1,}/ig
//{1,} significa que 1 coincidencia minima para true hasta indefinido

console.log(expReg.test(cadena)) muestra si cumple o no
console.log(expReg.exec(cadena)) muestra mas información

******************FUNCIONES ANONIMAS EJECUTABLES*******************
(function (w,d,c) {
    c.log(w)
    c.log(d)
})(window, document, console)
*/

