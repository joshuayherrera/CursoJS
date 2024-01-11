/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const ejercicio9 = () => console.log(Math.floor(Math.random()*99)+501)
//ejercicio9()

/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
const ejercicio10 = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un numero")
    if(typeof numero === "string") return console.warn("No es un numero")

    numero = numero.toString()
    const numeroRevez = () => {
        return numero.split("").reverse().join("")
    }
    console.log(numeroRevez() === numero)
}
//ejercicio10(2002)
/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const ejercicio11 = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un numero")
    if(typeof numero === "string") return console.warn("No es un numero")
    if(Math.sign(numero) === -1) return console.error("No se vale numeros negativos")
    let factorial = 1;
    for (let i = numero; i >= 1; i--){
        factorial *= i
    }
    console.log(factorial)
}

//ejercicio11(5)